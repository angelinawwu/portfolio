import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS_DIR = path.join(ROOT, "public", "assets");
const SRC_DIR = path.join(ROOT, "src");

const DRY_RUN = process.argv.includes("--dry-run");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const TEXT_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".md"]);

function walkDir(dir, filter) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full, filter));
    } else if (filter(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

async function convertImages() {
  const images = walkDir(ASSETS_DIR, (name) =>
    IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase())
  );

  if (images.length === 0) {
    console.log("No PNG/JPEG images found in public/assets/. Nothing to do.");
    return new Map();
  }

  console.log(`Found ${images.length} images to convert.\n`);

  const converted = new Map();
  let totalOriginal = 0;
  let totalWebp = 0;

  for (const src of images) {
    const ext = path.extname(src);
    const dest = src.slice(0, -ext.length) + ".webp";
    const originalSize = fs.statSync(src).size;
    totalOriginal += originalSize;

    const relativeSrc = "/" + path.relative(path.join(ROOT, "public"), src);
    const relativeDest = "/" + path.relative(path.join(ROOT, "public"), dest);

    if (DRY_RUN) {
      console.log(`[dry-run] would convert: ${relativeSrc} -> ${relativeDest}`);
      converted.set(relativeSrc, relativeDest);
      continue;
    }

    try {
      await sharp(src).rotate().webp({ quality: 100, effort: 6 }).toFile(dest);
      const webpSize = fs.statSync(dest).size;
      totalWebp += webpSize;
      const savings = ((1 - webpSize / originalSize) * 100).toFixed(0);

      console.log(
        `  ${relativeSrc} -> .webp  (${formatBytes(originalSize)} -> ${formatBytes(webpSize)}, -${savings}%)`
      );

      fs.unlinkSync(src);
      converted.set(relativeSrc, relativeDest);
    } catch (err) {
      console.error(`  FAILED: ${relativeSrc} — ${err.message}`);
    }
  }

  if (!DRY_RUN) {
    console.log(
      `\nConverted ${converted.size}/${images.length} images: ${formatBytes(totalOriginal)} -> ${formatBytes(totalWebp)} (-${((1 - totalWebp / totalOriginal) * 100).toFixed(0)}%)\n`
    );
  }

  return converted;
}

function rewriteReferences(converted) {
  if (converted.size === 0) return;

  const sourceFiles = walkDir(SRC_DIR, (name) =>
    TEXT_EXTENSIONS.has(path.extname(name).toLowerCase())
  );

  let filesChanged = 0;
  let refsRewritten = 0;

  for (const file of sourceFiles) {
    const original = fs.readFileSync(file, "utf-8");
    let content = original;

    for (const [oldPath, newPath] of converted) {
      const count = content.split(oldPath).length - 1;
      if (count > 0) {
        content = content.replaceAll(oldPath, newPath);
        refsRewritten += count;
      }
    }

    if (content !== original) {
      filesChanged++;
      const relFile = path.relative(ROOT, file);
      if (DRY_RUN) {
        console.log(`[dry-run] would rewrite refs in: ${relFile}`);
      } else {
        fs.writeFileSync(file, content, "utf-8");
        console.log(`  Updated refs in: ${relFile}`);
      }
    }
  }

  console.log(
    `\n${DRY_RUN ? "[dry-run] " : ""}Rewrote ${refsRewritten} reference(s) across ${filesChanged} file(s).`
  );
}

async function main() {
  if (DRY_RUN) console.log("=== DRY RUN (no files will be changed) ===\n");

  console.log("Phase 1: Converting images to WebP...\n");
  const converted = await convertImages();

  console.log("Phase 2: Rewriting source references...\n");
  rewriteReferences(converted);

  console.log("\nDone!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
