# Scripts

## convert-to-webp

Bulk-converts all PNG/JPEG images under `public/assets/` to WebP (quality 100, no visible quality loss), deletes the originals, and rewrites every matching path reference in `src/`. EXIF orientation is auto-applied so photos from phones/cameras won't be rotated. Re-run it any time you add new images.

Excluded (left as-is): `public/favicon*.png` and `public/OpenGraph-image.jpg` — these stay in their original format for browser/social-platform compatibility.

```bash
# Preview what will happen (no files touched)
npm run convert-images -- --dry-run

# Run for real
npm run convert-images
```

## generate-thumbhashes

Generates [ThumbHash](https://github.com/evanw/thumbhash) blur placeholders for every project thumbnail and the first frame of every project video referenced in `src/data/projects.ts`. Output is written to `src/data/thumbhashes.json` and consumed by `src/lib/thumbhash.ts` to render an instant blurred preview while the real image/video loads.

Requires `ffmpeg` on PATH (used to extract the video first frame).

```bash
npm run generate-thumbhashes
```

Re-run after adding or replacing any thumbnail/video asset.
