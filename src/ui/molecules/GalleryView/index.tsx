import { useState } from 'react';
import Image from 'next/image';
import Icon from '@/ui/atoms/Icon';
import ChevronRight from '@/ui/atoms/Icon/paths/chevronRight';
import classNames from 'classnames';

interface GalleryViewProps {
  images: string[];
}

const GalleryView = ({ images }: GalleryViewProps) => {
  const [imageIndex, updateImageIndex] = useState(0);

  const scroll = (isRight: boolean) => {
    isRight
      ? updateImageIndex(Math.min(images.length - 1, imageIndex + 1))
      : updateImageIndex(Math.max(0, imageIndex - 1));
  };

  const scrollRight = () => scroll(true);
  const scrollLeft = () => scroll(false);

  return (
    <div className={'flex flex-row w-full h-full'}>
      <button onClick={scrollLeft}>
        <Icon
          path={ChevronRight.path}
          className={classNames(
            'bg-lilac rotate-180 opacity-60 p-1.5',
            imageIndex === 0
              ? 'fill-dove'
              : 'fill-black hover:p-1 hover:fill-red hover:opacity-100',
          )}
          size={'32px'}
        />
      </button>
      <Image src={images[imageIndex]} alt={'foo'} width={300} height={200} unoptimized={true} />
      <button onClick={scrollRight}>
        <Icon
          path={ChevronRight.path}
          className={classNames(
            'bg-lilac fill-black opacity-60 p-1.5',
            imageIndex === images.length - 1
              ? 'fill-dove'
              : 'fill-black hover:p-1 hover:fill-red hover:opacity-100',
          )}
          size={'32px'}
        />
      </button>
    </div>
  );
};

export default GalleryView;
