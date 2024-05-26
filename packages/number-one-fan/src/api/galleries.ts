import { fetchApi } from '@/api/index';

export const anticGalleryList = async () => {
  return await fetchApi('antic?populate=deep');
};

export const gallery = async (galleryId: string) => {
  return await fetchApi(`galleries/${galleryId}/?populate=deep`);
};
