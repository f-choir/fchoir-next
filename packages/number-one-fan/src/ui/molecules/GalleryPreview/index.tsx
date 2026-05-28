import ImagePreview from '@/ui/molecules/ImagePreview';
import SquareImage from '@/ui/atoms/SquareImage';
import Link from 'next/link';

export interface GalleryPreviewProps {
  size: number;
  titleText: string;
  imgSrc: string;
  uri: string;
  date?: string;
  isUnoptimised?: boolean;
}

const GalleryPreview = ({ size, titleText, imgSrc, uri, isUnoptimised }: GalleryPreviewProps) => (
  <div className={'relative group w-[256px]'}>
    <Link href={uri}>
      <div
        className={`absolute text-center hover:bg-green hover:opacity-80 h-full w-full border-green border-4 rounded-xl`}
      >
        <p
          className={
            'text-pink text-2xl font-medium font-seaSummerCalm text-center overflow-hidden hidden group-hover:inline-block p-6 overflow-ellipsis'
          }
        >
          {titleText}
        </p>
      </div>
      <SquareImage
        size={size}
        altText={titleText}
        src={imgSrc}
        isUnoptimised={typeof isUnoptimised === 'boolean' ? isUnoptimised : false}
      />
    </Link>
  </div>
);

export default GalleryPreview;
