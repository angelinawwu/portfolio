import hashes from '@/data/thumbhashes.json';

type ThumbhashEntry = { dataUrl: string; width: number; height: number };

const HASH_MAP = hashes as Record<string, ThumbhashEntry>;

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
  return {
    dataUrl: entry.dataUrl,
    width: entry.width,
    height: entry.height,
    aspectRatio: entry.width / entry.height,
  };
}
