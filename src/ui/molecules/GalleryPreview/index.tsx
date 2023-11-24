import ImagePreview from '@/ui/molecules/ImagePreview';
import SquareImage from '@/ui/atoms/SquareImage';

interface GalleryPreviewProps {
  size: number;
  titleText: string;
  imgSrc: string;
  galleryHref: string;
}

const GalleryPreview = ({ size, titleText, imgSrc, galleryHref }: GalleryPreviewProps) => (
  <a href={galleryHref} className={`absolute group border-purple border-4`}>
    <div className={`absolute text-center bg-lilac opacity-80 h-full`}>
      <p
        className={
          'text-red text-4xl font-medium text-center overflow-hidden hidden group-hover:inline-block p-6 overflow-ellipsis'
        }
      >
        {titleText}
      </p>
    </div>
    <SquareImage size={size} altText={titleText} src={imgSrc} />
  </a>
);

export default GalleryPreview;
