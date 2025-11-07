import Image from 'next/image';

interface PortraitImageProps {
  src: string;
  altText: string;
  size: number;
  style?: object;
  title?: string;
  isUnoptimised?: boolean;
}

const PortraitImage = ({
  src,
  altText,
  size,
  style,
  title,
  isUnoptimised = false,
}: PortraitImageProps) => (
  <Image
    src={src}
    alt={altText}
    width={size}
    height={size * 1.5}
    style={style}
    title={title}
    className="object-cover"
    unoptimized={isUnoptimised}
  />
);

export default PortraitImage;
