'use client';
import Image from 'next/image';
import CarouselButton from '@/ui/atoms/CarouselButton';
import CloseButton from '@/ui/atoms/CloseButton';
import { imageSrc } from '@/ui/helpers';
import gallery from '@/ui/molecules/Gallery';
import Wrap from '@/ui/atoms/Wrap';

export interface GalleryImageProps {
  uri: string;
  alt?: string;
  caption?: string;
  photoCredit?: string;
}

interface GalleryViewProps {
  images: GalleryImageProps[];
  viewIdx: number;
  closeViewCallback?: () => void;
  updateViewIdxCallback: (idx: number) => void;
  updateIsViewingHeroCallback?: (isViewing: boolean) => void;
  isClickableImage?: boolean;
}

const GalleryView = ({
  images,
  viewIdx,
  closeViewCallback,
  updateViewIdxCallback,
  updateIsViewingHeroCallback,
  isClickableImage,
}: GalleryViewProps) => {
  const scroll = (isRight: boolean) => {
    isRight
      ? updateViewIdxCallback(Math.min(images.length - 1, viewIdx + 1))
      : updateViewIdxCallback(Math.max(0, viewIdx - 1));
  };

  const scrollRight = () => scroll(true);
  const scrollLeft = () => scroll(false);

  const containedImage = () => {
    const containerClasses = 'w-11/12 flex flex-row relative';
    const image = (
      <Image
        className={`opacity-100 object-cover pt-2 m:pt-4 l:pt-6 xl:pt-8 ${
          isClickableImage ? 'cursor-pointer' : ''
        }`}
        src={images[viewIdx].uri}
        alt={images[viewIdx].alt ?? ''}
        fill={true}
        unoptimized={false}
        title={images[viewIdx].alt || ''}
      />
    );
    return isClickableImage && updateIsViewingHeroCallback ? (
      <button onClick={() => updateIsViewingHeroCallback(true)} className={containerClasses}>
        {image}
      </button>
    ) : (
      <div className={containerClasses}>{image}</div>
    );
  };

  return (
    <Wrap className={`h-3/4`}>
      <div className="flex flex-row m-auto h-full w-full">
        <CarouselButton
          scrollFn={scrollLeft}
          viewIdx={viewIdx}
          isAtEnd={(idx) => idx === 0}
          isRight={false}
        />
        {containedImage()}
        <CarouselButton
          scrollFn={scrollRight}
          viewIdx={viewIdx}
          isAtEnd={(idx) => idx === images.length - 1}
          isRight={true}
        />
        {closeViewCallback && <CloseButton onClose={closeViewCallback} />}
      </div>
      <p className="text-lilac text-center text-2xl m:text-3xl pt-4 m:pt-8">
        {images[viewIdx].caption ?? ''}
      </p>
      {images[viewIdx].photoCredit && <p>Photo credit: {images[viewIdx].photoCredit}</p>}
    </Wrap>
  );
};

export default GalleryView;
