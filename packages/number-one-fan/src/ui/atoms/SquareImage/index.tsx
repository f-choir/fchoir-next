import Image from 'next/image';

interface SquareImageProps {
  src: string;
  altText: string;
  size: number;
  style?: object;
}

const SquareImage = ({ src, altText, size, style }: SquareImageProps) => (
  <Image
    src={src}
    alt={altText}
    width={size}
    height={size}
    // unoptimized={true}
    style={style}
    className={`aspect-square object-cover`}
  />
);

export default SquareImage;
