// Generates thumbhash placeholders for all project thumbnails and video covers.
// Usage: npm run generate-thumbhashes
//
// Reads asset paths referenced in src/data/projects.ts (thumbnail + videoUrl),
// resolves them under public/, hashes images directly via sharp, and for videos
// extracts the first frame via ffmpeg before hashing. Output is written to
// src/data/thumbhashes.json as { [assetPath]: { hash, width, height } }.

import sharp from 'sharp';
import { rgbaToThumbHash, thumbHashToRGBA } from 'thumbhash';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// Longest-edge size of the pre-pixelated placeholder. Smaller = chunkier pixels.
const PIXEL_TARGET = 16;

const PROJECT_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PROJECTS_FILE = path.join(PROJECT_ROOT, 'src/data/projects.ts');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src/data/thumbhashes.json');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');

const VIDEO_EXTS = new Set(['.mp4', '.mov', '.webm', '.m4v', '.avi', '.mkv']);

function extractAssets() {
  const text = fs.readFileSync(PROJECTS_FILE, 'utf8');
  const re = /(?:thumbnail|videoUrl)\s*:\s*['"]([^'"]+)['"]/g;
  const assets = new Set();
  let m;
  while ((m = re.exec(text))) assets.add(m[1]);
  return [...assets];
}

async function hashImageBuffer(buffer) {
  // Resize so longest edge ≤ 100px (recommended for thumbhash).
  const resized = sharp(buffer)
    .resize(100, 100, { fit: 'inside' })
    .ensureAlpha()
    .raw();
  const { data, info } = await resized.toBuffer({ resolveWithObject: true });
  const hashBytes = rgbaToThumbHash(info.width, info.height, data);

  // Decode the hash back to RGBA, then downsample to PIXEL_TARGET via
  // nearest-neighbor so the placeholder has visibly chunky pixels.
  const decoded = thumbHashToRGBA(hashBytes);
  const scale = PIXEL_TARGET / Math.max(decoded.w, decoded.h);
  const dw = Math.max(2, Math.round(decoded.w * scale));
  const dh = Math.max(2, Math.round(decoded.h * scale));
  const pngBuffer = await sharp(Buffer.from(decoded.rgba), {
    raw: { width: decoded.w, height: decoded.h, channels: 4 },
  })
    .resize(dw, dh, { kernel: 'nearest' })
    .png({ compressionLevel: 9 })
    .toBuffer();
  const dataUrl = `data:image/png;base64,${pngBuffer.toString('base64')}`;

  const meta = await sharp(buffer).metadata();
  return {
    dataUrl,
    width: meta.width ?? info.width,
    height: meta.height ?? info.height,
  };
}

function extractVideoFrame(videoPath) {
  const tmp = path.join(os.tmpdir(), `thumbhash-frame-${Date.now()}-${Math.random().toString(36).slice(2)}.png`);
  execSync(
    `ffmpeg -y -hide_banner -loglevel error -ss 0 -i "${videoPath}" -frames:v 1 "${tmp}"`,
    { stdio: 'inherit' }
  );
  const buf = fs.readFileSync(tmp);
  fs.unlinkSync(tmp);
  return buf;
}

async function main() {
  const assets = extractAssets();
  // Preserve existing entries so re-runs are incremental.
  let existing = {};
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      existing = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
    } catch {
      existing = {};
    }
  }

  const result = { ...existing };

  for (const asset of assets) {
    const fullPath = path.join(PUBLIC_DIR, asset);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[skip] missing asset: ${asset}`);
      continue;
    }

    const ext = path.extname(asset).toLowerCase();
    const isVideo = VIDEO_EXTS.has(ext);

    try {
      const buffer = isVideo ? extractVideoFrame(fullPath) : fs.readFileSync(fullPath);
      const entry = await hashImageBuffer(buffer);
      result[asset] = entry;
      console.log(`[ok]   ${asset} -> ${entry.dataUrl.length} chars (${entry.width}x${entry.height})`);
    } catch (err) {
      console.error(`[fail] ${asset}:`, err.message);
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2) + '\n');
  console.log(`\nWrote ${Object.keys(result).length} hashes to ${path.relative(PROJECT_ROOT, OUTPUT_FILE)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
