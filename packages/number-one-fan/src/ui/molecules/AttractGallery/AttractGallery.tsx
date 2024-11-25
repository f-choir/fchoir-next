'use client';

import GalleryView from '@/ui/molecules/GalleryView';
import Image from 'next/image';
import { useState } from 'react';
import CloseButton from '@/ui/atoms/CloseButton';

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
  const [isViewingHero, setIsViewingHero] = useState(false);

  const updateViewIdxCallback = (idx: number) => setViewIdx(idx);

  const updateIsViewingHero = (isViewing: boolean) => setIsViewingHero(isViewing);

  console.log('BEEBUG: items', items);

  return (
    <>
      <div className={'h-[60vw] w-[100vw] relative z-0'}>
        <GalleryView
          images={items.map((item) => ({ uri: item.imgUrl, alt: item.imgAlt }))}
          viewIdx={viewIdx}
          updateViewIdxCallback={updateViewIdxCallback}
          updateIsViewingHeroCallback={updateIsViewingHero}
          isClickableImage={true}
        />
      </div>
      <div
        className={`${
          isViewingHero ? 'inline-block' : 'hidden'
        } absolute top-24 z-10 w-[100vw] h-[60vw]`}
      >
        <CloseButton onClose={() => updateIsViewingHero(false)} />
        <Image
          className={'foo'}
          alt={'bar'}
          src={items[viewIdx].imgUrl}
          fill={true}
          unoptimized={false}
        />
      </div>
    </>
  );
};

export default AttractGallery;
