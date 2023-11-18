import { SVGProps } from 'react';

interface IconProps {
  /** SVG path data for the icon to render. */
  path: string;

  /** SVG viewbox for the icon to render. */
  viewBox?: string;

  /** SVG transform for the icon to render. */
  transform?: string;

  /** SVG width/height em/px. If inline with text use `1em`. Minimum `32px` and a gel-spacing-unit. */
  size?: string;

  /** SVG width em/px. If inline with text use `1em`. Minimum `32px` and a gel-spacing-unit. */
  width?: string;

  /** SVG height em/px. If inline with text use `1em`. Minimum `32px` and a gel-spacing-unit. */
  height?: string;

  /** Additional classes that can be passed onto the component **/
  className?: string;
}

const xmlns = 'http://www.w3.org/2000/svg';

const Icon = ({ path, viewBox, transform, size, className, width, height }:IconProps) => {
  const svgProps: SVGProps<SVGSVGElement> = {
    width: width || size,
    height: height || size,
    viewBox,
    xmlns,
    className: `${
      className ?? ''
    } sw-transition sw-ease sw-duration-350 motion-reduce:sw-transition-none`,
    'aria-hidden': 'true',
    focusable: 'false',
  };
  return (
    <svg {...svgProps}>
      <path d={path} transform={transform} />
    </svg>
  );
}

export default Icon;