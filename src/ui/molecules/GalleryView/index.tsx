'use client';
import Image from 'next/image';
import Icon from '@/ui/atoms/Icon';
import Cross from '@/ui/atoms/Icon/paths/cross';
import CarouselButton from '@/ui/atoms/CarouselButton';

export interface GalleryImageProps {
  uri: string;
  alt?: string;
}

interface GalleryViewProps {
  images: GalleryImageProps[];
  viewIdx: number;
  closeViewCallback: () => void;
  updateViewIdxCallback: (idx: number) => void;
}

const GalleryView = ({
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
        src={images[viewIdx].uri}
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
      <button onClick={closeViewCallback}>
        <Icon
          path={Cross.path}
          className={'absolute fill-white top-0 right-0 pt-4'}
          size={'48px'}
        />
      </button>
    </div>
  );
};

export default GalleryView;
