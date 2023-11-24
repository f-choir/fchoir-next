import SquareImage from '@/ui/atoms/SquareImage';

interface ImagePreviewProps {
  size: number;
  altText: string;
  src: string;
}

const ImagePreview = ({ size, altText, src }: ImagePreviewProps) => (
  <div className={'hover:fill-lilac hover:opacity-40 transition duration-100'}>
    <SquareImage src={src} altText={altText} size={size} />
  </div>
);

export default ImagePreview;
