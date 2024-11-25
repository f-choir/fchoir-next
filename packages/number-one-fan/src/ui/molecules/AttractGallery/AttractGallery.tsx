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
        } absolute top-16 z-40 w-[100vw] h-[60vw] bg-dove`}
      >
        <CloseButton onClose={() => updateIsViewingHero(false)} />
        <div className={'flex'}>
          <div className={'w-[70vw] h-[45vw] relative m-4'}>
            <Image
              className={'object-cover'}
              alt={'bar'}
              src={items[viewIdx].imgUrl}
              fill={true}
              unoptimized={false}
            />
          </div>
          <div className={'m-4'}>
            <div className={'text-4xl font-bold'}>{items[viewIdx].galleryTitle}</div>
            <div className={'text-2xl py-4'}>{items[viewIdx].galleryDescription}</div>
            <a
              className={'text-2xl hover:text-red hover:underline transition-all'}
              href={`gallery/${items[viewIdx].galleryId}`}
            >
              More from this event
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttractGallery;
