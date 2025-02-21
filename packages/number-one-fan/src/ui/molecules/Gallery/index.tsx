'use client';
import SubHeader from '@/ui/atoms/SubHeader';
import ImageGrid from '@/ui/molecules/ImageGrid';
import classNames from 'classnames';
import GalleryView, { GalleryImageProps } from '@/ui/molecules/GalleryView';
import { useState } from 'react';

interface GalleryProps {
  id: string;
  title: string;
  images: GalleryImageProps[];
  pathOverride?: boolean;
  viewClassName?: string;
}

const Gallery = ({ id, title, images, pathOverride, viewClassName }: GalleryProps) => {
  const [isViewMode, setIsViewMode] = useState(false);
  const [viewIdx, setViewIdx] = useState(0);

  const onImageClick = (idx: number) => () => {
    setIsViewMode(true);
    setViewIdx(idx);
  };

  const updateViewIdxCallback = (idx: number) => setViewIdx(idx);

  const onCloseViewClick = () => setIsViewMode(false);

  return (
    <>
      <div className={`flex flex-col p-2 pb-4 ${isViewMode ? 'hidden' : 'inline-block'}`}>
        {title && <SubHeader text={title} className={'inline-block text-center mb-4'} />}
        <ImageGrid
          path={pathOverride ? '' : id}
          images={images
            .slice(0, 9)
            .map((image, idx) => ({ uri: image.uri, alt: image.alt, caption: image.caption }))}
          onClickCallback={images.slice(0, 9).map((_, idx) => onImageClick(idx))}
        />
      </div>
      <div
        className={classNames(
          'absolute bg-black p-2 pt-10 m:p-8 w-full m:w-5/6 h-3/4 m:h-5/6',
          isViewMode ? 'inline-block' : 'hidden',
          `${viewClassName ? viewClassName : ''}`,
        )}
      >
        <GalleryView
          images={images}
          viewIdx={viewIdx}
          closeViewCallback={onCloseViewClick}
          updateViewIdxCallback={updateViewIdxCallback}
        />
      </div>
    </>
  );
};

export default Gallery;
