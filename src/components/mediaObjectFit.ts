import type { CSSProperties } from 'react';

export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none';

/**
 * Best-effort detection of the rendered media element's CSS `object-fit`.
 * Recognizes the Tailwind utility classes (`object-cover` / `object-contain`
 * / `object-fill` / `object-none`) on `className`, and an explicit
 * `style.objectFit` on inline styles.
 *
 * Returning `undefined` signals "leave default behavior" — `img-fx`'s reveal
 * already mimics `object-cover`, so undetected and `cover` are equivalent
 * downstream.
 */
export function detectObjectFit(
  input: string | CSSProperties | undefined,
): ObjectFit | undefined {
  if (!input) return undefined;
  if (typeof input === 'string') {
    const match = input.match(/(?:^|\s)object-(cover|contain|fill|none)(?:\s|$)/);
    return (match?.[1] as ObjectFit | undefined) ?? undefined;
  }
  const fit = input.objectFit;
  if (fit === 'cover' || fit === 'contain' || fit === 'fill' || fit === 'none') return fit;
  return undefined;
}
