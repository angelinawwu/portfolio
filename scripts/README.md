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
