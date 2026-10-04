/**
 * Self-hosted, pre-sized imagery. Every file in /public/images is listed with
 * its source, creator and licence in IMAGE_LICENSES.md.
 *
 * Each slug exists as `/images/<slug>-<width>.webp` at the widths below.
 */
export const IMAGE_WIDTHS = [640, 1280, 1920] as const

/** URL for the smallest generated size that is at least `width` pixels wide. */
export function img(slug: string, width = 1280) {
  const w = IMAGE_WIDTHS.find((size) => size >= width) ?? IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1]
  return `/images/${slug}-${w}.webp`
}

/** Responsive srcset; requested widths are snapped to the generated sizes. */
export function srcSet(slug: string, widths: readonly number[] = IMAGE_WIDTHS) {
  const sizes = Array.from(new Set(widths.map((w) => IMAGE_WIDTHS.find((s) => s >= w) ?? 1920)))
  return sizes.map((w) => `${img(slug, w)} ${w}w`).join(', ')
}
