'use client';

import GalleryView from '@/ui/molecules/GalleryView';
import { useState } from 'react';

interface AttractGalleryItem {
  galleryId: number;
  galleryTitle: string;
  galleryDescription?: string;
  imgUrl: string;
  imgAlt?: string;
}
interface AttractGalleryProps {
  items: AttractGalleryItem[];
}

const AttractGallery = ({ items }: AttractGalleryProps) => {
  const [viewIdx, setViewIdx] = useState(0);

  const updateViewIdxCallback = (idx: number) => setViewIdx(idx);

  return (
    <div className={'h-[60vw] w-[100vw] relative z-0'}>
      <GalleryView
        images={items.map((item) => ({ uri: item.imgUrl, alt: item.imgAlt }))} // an array of objects with url and alt text
        viewIdx={viewIdx}
        updateViewIdxCallback={updateViewIdxCallback}
      />
    </div>
  );
};

export default AttractGallery;
