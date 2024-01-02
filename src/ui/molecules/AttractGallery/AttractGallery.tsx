'use client';

import { getGalleryById } from '@/model/galleries';
import GalleryView, { GalleryImageProps } from '@/ui/molecules/GalleryView';
import { useState } from 'react';

interface AttractGalleryProps {
  id: string;
}

const AttractGallery = ({ id }: AttractGalleryProps) => {
  const [viewIdx, setViewIdx] = useState(0);
  const gallery = getGalleryById(id);
  if (!gallery) return;
  const imagesToViewProps = ({
    imageUrl,
    alt,
  }: {
    imageUrl: string;
    alt?: string;
  }): GalleryImageProps => ({ uri: imageUrl, alt });

  const updateViewIdxCallback = (idx: number) => setViewIdx(idx);

  setTimeout(() => {
    setViewIdx((viewIdx + 1) % gallery.images.length);
  }, 5000);

  return (
    <GalleryView
      images={gallery.images.map(imagesToViewProps)}
      viewIdx={viewIdx}
      updateViewIdxCallback={updateViewIdxCallback}
    />
  );
};

export default AttractGallery;
