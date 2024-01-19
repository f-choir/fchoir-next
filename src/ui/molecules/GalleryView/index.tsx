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
}

const GalleryView = ({
  galleryId,
  images,
  viewIdx,
  closeViewCallback,
  updateViewIdxCallback,
}: GalleryViewProps) => {
  const scroll = (isRight: boolean) => {
    isRight
      ? updateViewIdxCallback(Math.min(images.length - 1, viewIdx + 1))
      : updateViewIdxCallback(Math.max(0, viewIdx - 1));
  };

  const scrollRight = () => scroll(true);
  const scrollLeft = () => scroll(false);

  return (
    <div className={'flex flex-row justify-center m-auto'}>
      <CarouselButton
        scrollFn={scrollLeft}
        viewIdx={viewIdx}
        isAtEnd={(idx) => idx === 0}
        isRight={false}
      />
      <Image
        className={'opacity-100'}
        src={imageSrc(galleryId, images[viewIdx].uri)}
        alt={images[viewIdx].alt ?? ''}
        width={300}
        height={200}
        unoptimized={true}
      />
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
