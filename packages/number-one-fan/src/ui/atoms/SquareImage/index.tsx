import Image from 'next/image';

interface SquareImageProps {
  src: string;
  altText: string;
  size: number;
  style?: object;
  title?: string;
}

const SquareImage = ({ src, altText, size, style, title }: SquareImageProps) => (
  <Image
    src={src}
    alt={altText}
    width={size}
    height={size}
    style={style}
    className={`aspect-square object-cover`}
    title={title}
  />
);

export default SquareImage;
