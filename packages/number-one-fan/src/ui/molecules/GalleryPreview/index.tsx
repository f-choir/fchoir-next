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
        className={`absolute text-center hover:bg-green hover:opacity-95 h-full w-full border-black border-2 rounded-xl`}
      >
        <p
          className={
            'text-black text-3xl font-medium font-bastardoSemi text-center overflow-hidden hidden group-hover:inline-block p-4 overflow-ellipsis'
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
