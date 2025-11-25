#!/bin/zsh

# Converts all raster images under public/ to WebP and videos to MP4 (H.264) while
# keeping the original directory structure.
# Requirements: ffmpeg, cwebp (from libwebp), find, mktemp.

set -euo pipefail

PROJECT_ROOT="/Users/angelinawu/portfolio"
ASSETS_DIR="$PROJECT_ROOT/public"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required. Install via 'brew install ffmpeg'." >&2
  exit 1
fi

if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp is required. Install via 'brew install webp'." >&2
  exit 1
fi

convert_image() {
  local src="$1"
  local abs_src
  abs_src="$(realpath "$src")"
  local dest="${abs_src%.*}.webp"

  if [[ ! -f "$abs_src" ]]; then
    echo "Skipping missing file: $abs_src"
    return
  fi

  if [[ -f "$dest" && "$dest" -nt "$abs_src" ]]; then
    echo "Skipping $abs_src (WebP up to date)"
    return
  fi

  echo "Converting image: $abs_src -> $dest"
  cwebp -quiet -q 85 "$abs_src" -o "$dest"
}

convert_video() {
  local src="$1"
  local abs_src
  abs_src="$(realpath "$src")"
  local dest="${abs_src%.*}.mp4"

  if [[ ! -f "$abs_src" ]]; then
    echo "Skipping missing file: $abs_src"
    return
  fi

  if [[ -f "$dest" && "$dest" -nt "$abs_src" ]]; then
    echo "Skipping $abs_src (MP4 up to date)"
    return
  fi

  echo "Converting video: $abs_src -> $dest"
  ffmpeg -hide_banner -loglevel error \
    -i "$abs_src" \
    -c:v libx264 -preset slow -crf 20 \
    -c:a aac -b:a 192k \
    -movflags +faststart \
    "$dest"
}

echo "Converting images to WebP..."
while IFS= read -r -d '' file; do
  convert_image "$file"
done < <(find "$ASSETS_DIR" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.gif' \) -print0)

echo "Converting videos to MP4..."
while IFS= read -r -d '' file; do
  convert_video "$file"
done < <(find "$ASSETS_DIR" -type f \( -iname '*.mov' -o -iname '*.avi' -o -iname '*.mkv' -o -iname '*.m4v' \) -print0)

echo "All conversions complete."

