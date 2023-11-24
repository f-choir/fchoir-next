import Image from 'next/image';

interface SquareImageProps {
  src: string;
  altText: string;
  size: number;
}

const SquareImage = ({ src, altText, size }: SquareImageProps) => (
  <Image
    src={src}
    alt={altText}
    width={size}
    height={size}
    unoptimized={true}
    className={`aspect-square`}
  />
);

export default SquareImage;
