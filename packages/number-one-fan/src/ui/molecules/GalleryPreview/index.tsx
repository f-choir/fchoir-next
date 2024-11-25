import ImagePreview from '@/ui/molecules/ImagePreview';
import SquareImage from '@/ui/atoms/SquareImage';
import Link from 'next/link';

export interface GalleryPreviewProps {
  size: number;
  titleText: string;
  imgSrc: string;
  uri: string;
}

const GalleryPreview = ({ size, titleText, imgSrc, uri }: GalleryPreviewProps) => (
  <div className={'relative group w-[256px]'}>
    <Link href={uri}>
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
    </Link>
  </div>
);

export default GalleryPreview;
