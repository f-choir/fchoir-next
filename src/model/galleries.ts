import galleryData from '../data/galleries.json' assert { type: 'json' };
const galleries = () => galleryData.map((gallery) => gallery.id);

export const getGalleryById = (id: string) => {
  return galleryData.find((gallery) => gallery.id === id);
};

export const getGalleryPreviews = (id: string) => {};

export default galleries;
