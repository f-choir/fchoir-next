import ImagePreview from '@/ui/molecules/ImagePreview';
import SquareImage from '@/ui/atoms/SquareImage';

interface GalleryPreviewProps {
  size: number;
  titleText: string;
  imgSrc: string;
  galleryHref: string;
}

// TODO a different way of surfacing titles on mobile, where we have no hover states.

const GalleryPreview = ({ size, titleText, imgSrc, galleryHref }: GalleryPreviewProps) => (
  <div className={'relative group'}>
    <a href={galleryHref}>
      <div
        className={`absolute text-center hover:bg-lilac hover:opacity-80 h-full w-full border-purple border-4`}
      >
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
  </div>
);

export default GalleryPreview;
