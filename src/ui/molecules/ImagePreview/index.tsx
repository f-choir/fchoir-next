import Image from 'next/image';

interface ImagePreviewProps {
  size: number;
  altText: string;
  src: string;
}

const ImagePreview = ({ size, altText, src }: ImagePreviewProps) => (
  <div className={'hover:fill-lilac hover:opacity-40 transition duration-100'}>
    <Image
      src={src}
      alt={altText}
      width={size}
      height={size}
      unoptimized={true}
      className={`aspect-square`}
    />
  </div>
);

export default ImagePreview;
