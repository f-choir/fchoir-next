'use client';
import Image from 'next/image';
import Icon from '@/ui/atoms/Icon';
import ChevronRight from '@/ui/atoms/Icon/paths/chevronRight';
import classNames from 'classnames';
import Cross from '@/ui/atoms/Icon/paths/cross';

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
  // const [imageIndex, updateImageIndex] = useState(viewIdx);

  const scroll = (isRight: boolean) => {
    isRight
      ? updateViewIdxCallback(Math.min(images.length - 1, viewIdx + 1))
      : updateViewIdxCallback(Math.max(0, viewIdx - 1));
  };

  const scrollRight = () => scroll(true);
  const scrollLeft = () => scroll(false);

  return (
    <div className={'flex flex-row justify-center m-auto'}>
      <button onClick={scrollLeft}>
        <Icon
          path={ChevronRight.path}
          className={classNames(
            'bg-lilac rotate-180 opacity-60 p-1.5 m-auto',
            viewIdx === 0 ? 'fill-dove' : 'fill-black hover:p-1 hover:fill-red hover:opacity-100',
          )}
          size={'32px'}
        />
      </button>
      <Image
        className={'opacity-100'}
        src={images[viewIdx].uri}
        alt={images[viewIdx].alt ?? ''}
        width={300}
        height={200}
        unoptimized={true}
      />
      <button onClick={scrollRight}>
        <Icon
          path={ChevronRight.path}
          className={classNames(
            'bg-lilac fill-black opacity-60 p-1.5',
            viewIdx === images.length - 1
              ? 'fill-dove'
              : 'fill-black hover:p-1 hover:fill-red hover:opacity-100',
          )}
          size={'32px'}
        />
      </button>
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
