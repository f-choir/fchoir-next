import galleryData from '../data/galleries.json' assert { type: 'json' };
import { GalleryPreviewProps } from '@/ui/molecules/GalleryPreview';
const galleries = () => galleryData.map((gallery) => gallery.id);

export const getGalleryById = (id: string) => {
  return galleryData.find((gallery) => gallery.id === id);
};

const galleryJsonToGalleryPreviewProps = (gallery: any): GalleryPreviewProps => ({
  size: 256,
  titleText: gallery.title,
  imgSrc:
    gallery.images[gallery.heroImageIndex ?? 0]?.imageUrl ?? 'https://picsum.photos/id/10/300/200',
  uri: gallery.id,
});

export const getGalleryPreviews = () => {
  return galleryData.map(galleryJsonToGalleryPreviewProps);
};

export const getMerchGalleryImages = () => {
  const merchGallery = {
    id: 'merch-gallery',
    title: 'merch',
    heroImageIndex: 0,
    images: [
      { imageUrl: 'merch-test', alt: 'a bunch of hot F* members modelling shirts' },
      { imageUrl: 'merch-test', alt: 'a bunch of hot F* members modelling shirts' },
      { imageUrl: 'merch-test', alt: 'a bunch of hot F* members modelling shirts' },
    ],
  };
  return merchGallery.images;
};

export default galleries;
