'use client';
import Image from 'next/image';
import CarouselButton from '@/ui/atoms/CarouselButton';
import CloseButton from '@/ui/atoms/CloseButton';
import { imageSrc } from '@/ui/helpers';
import gallery from '@/ui/molecules/Gallery';

export interface GalleryImageProps {
  uri: string;
  alt?: string;
}

interface GalleryViewProps {
  galleryId: string;
  images: GalleryImageProps[];
  viewIdx: number;
  closeViewCallback?: () => void;
  updateViewIdxCallback: (idx: number) => void;
  // viewClassName?: string;
}

const GalleryView = ({
  galleryId,
  images,
  viewIdx,
  closeViewCallback,
  updateViewIdxCallback, // viewClassName,
}: GalleryViewProps) => {
  const scroll = (isRight: boolean) => {
    isRight
      ? updateViewIdxCallback(Math.min(images.length - 1, viewIdx + 1))
      : updateViewIdxCallback(Math.max(0, viewIdx - 1));
  };

  const scrollRight = () => scroll(true);
  const scrollLeft = () => scroll(false);

  return (
    <div className={`flex flex-row justify-center m-auto h-3/4`}>
      <CarouselButton
        scrollFn={scrollLeft}
        viewIdx={viewIdx}
        isAtEnd={(idx) => idx === 0}
        isRight={false}
      />
      <div className={`w-3/4 flex flex-row relative`}>
        {/* TODO doesn't handle portrait very well */}
        <Image
          className={`opacity-100 object-cover`}
          src={images[viewIdx].uri}
          alt={images[viewIdx].alt ?? ''}
          fill={true}
          unoptimized={true}
        />
      </div>
      <CarouselButton
        scrollFn={scrollRight}
        viewIdx={viewIdx}
        isAtEnd={(idx) => idx === images.length - 1}
        isRight={true}
      />
      {closeViewCallback && <CloseButton onClose={closeViewCallback} />}
    </div>
  );
};

export default GalleryView;
