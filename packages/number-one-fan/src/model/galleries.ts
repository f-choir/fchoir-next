import galleryData from '../data/galleries.json' assert { type: 'json' };
import { GalleryPreviewProps } from '@/ui/molecules/GalleryPreview';
const galleries = () => galleryData.map((gallery) => gallery.id);

export const getGalleryById = (id: string) => {
  return galleryData.find((gallery) => gallery.id === id);
};

export default galleries;
