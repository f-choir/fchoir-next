'use client';
import SubHeader from '@/ui/atoms/SubHeader';
import ImageGrid from '@/ui/molecules/ImageGrid';
import classNames from 'classnames';
import GalleryView, { GalleryImageProps } from '@/ui/molecules/GalleryView';
import { useState } from 'react';

interface GalleryProps {
  title: string;
  images: GalleryImageProps[];
}

const Gallery = ({ title, images }: GalleryProps) => {
  const [isViewMode, setIsViewMode] = useState(false);
  const [viewIdx, setViewIdx] = useState(0);

  const onImageClick = (idx: number) => () => {
    setIsViewMode(true);
    setViewIdx(idx);
  };

  const updateViewIdxCallback = (idx: number) => setViewIdx(idx);

  const onCloseViewClick = () => setIsViewMode(false);

  // this also needs to provide a callback to gallery view. View needs to rely on this viewIdx rather than having its own state.

  return (
    <>
      <div className={'flex flex-col p-2 pb-4'}>
        <SubHeader text={title} className={'inline-block text-center mb-4'} />
        <ImageGrid
          images={images.slice(0, 9).map((image, idx) => image.uri)}
          onClickCallback={images.slice(0, 9).map((_, idx) => onImageClick(idx))}
        />
      </div>
      <div className={classNames('absolute bg-black p-8', isViewMode ? 'inline-block' : 'hidden')}>
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
