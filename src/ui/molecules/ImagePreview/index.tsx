import SquareImage from '@/ui/atoms/SquareImage';

interface ImagePreviewProps {
  size: number;
  altText: string;
  src: string;
  onClickCallback: () => void;
}

const ImagePreview = ({ size, altText, src, onClickCallback }: ImagePreviewProps) => (
  <div
    className={'hover:fill-lilac hover:opacity-40 transition duration-100'}
    onClick={onClickCallback}
  >
    <SquareImage src={src} altText={altText} size={size} />
  </div>
);

export default ImagePreview;
