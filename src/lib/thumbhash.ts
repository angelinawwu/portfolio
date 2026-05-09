import { thumbHashToDataURL } from 'thumbhash';
import hashes from '@/data/thumbhashes.json';

type ThumbhashEntry = { hash: string; width: number; height: number };

const HASH_MAP = hashes as Record<string, ThumbhashEntry>;

// Cache decoded data URLs so we don't re-decode on every render.
const dataUrlCache = new Map<string, string>();

function base64ToBytes(b64: string): Uint8Array {
  if (typeof atob === 'function') {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }
  // Node fallback (build / SSR before atob is global on older runtimes).
  return new Uint8Array(Buffer.from(b64, 'base64'));
}

export type ThumbhashInfo = {
  dataUrl: string;
  width: number;
  height: number;
  aspectRatio: number;
};

export function getThumbhash(asset?: string): ThumbhashInfo | undefined {
  if (!asset) return undefined;
  const entry = HASH_MAP[asset];
  if (!entry) return undefined;

  let dataUrl = dataUrlCache.get(entry.hash);
  if (!dataUrl) {
    dataUrl = thumbHashToDataURL(base64ToBytes(entry.hash));
    dataUrlCache.set(entry.hash, dataUrl);
  }

  return {
    dataUrl,
    width: entry.width,
    height: entry.height,
    aspectRatio: entry.width / entry.height,
  };
}
