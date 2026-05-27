import SquareImage from '@/ui/atoms/SquareImage';

interface ImagePreviewProps {
  size: number;
  altText: string;
  src: string;
  onClickCallback: () => void;
}

const ImagePreview = ({ size, altText, src, onClickCallback }: ImagePreviewProps) => (
  <button
    className={'hover:bg-green hover:opacity-50 transition duration-100'}
    onClick={onClickCallback}
  >
    <SquareImage
      src={src}
      altText={altText}
      size={size}
      style={{ objectFit: 'cover' }}
      title={altText}
    />
  </button>
);

export default ImagePreview;
