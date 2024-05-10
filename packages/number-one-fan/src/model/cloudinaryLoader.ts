const imageSizePrefix = (width: number): string => {
  if (width <= 234) return 'thumbnail_';
  if (width <= 500) return 'small_';
  if (width <= 750) return 'medium_';
  if (width <= 1000) return 'large_';
  return '';
};

const CLOUDINARY_PREFIX = 'https://res.cloudinary.com/f-choir-cloudinary/image/upload/v1712915258/';

const cloudinaryLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string => {
  return `${CLOUDINARY_PREFIX}${imageSizePrefix(width)}${src.split(CLOUDINARY_PREFIX)[1]}`;
};

export default cloudinaryLoader;
