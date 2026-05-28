import Image from 'next/image';

interface SquareImageProps {
  src: string;
  altText: string;
  size: number;
  style?: object;
  title?: string;
  isUnoptimised?: boolean;
}

const SquareImage = ({
  src,
  altText,
  size,
  style,
  title,
  isUnoptimised = false,
}: SquareImageProps) => (
  <Image
    src={src}
    alt={altText}
    width={size}
    height={size}
    style={style}
    className={`aspect-square object-cover rounded-xl`}
    title={title}
    unoptimized={isUnoptimised}
  />
);

export default SquareImage;
