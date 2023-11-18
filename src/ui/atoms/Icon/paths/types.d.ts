export interface Icon {
  /** Compressed + concatenated SVG path data. */
  path: string;

  /** SVG transform definition. */
  transform?: string;

  /** SVG viewbox definition. */
  viewBox?: string;
}