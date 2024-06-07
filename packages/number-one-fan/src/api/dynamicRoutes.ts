import { fetchApi } from '@/api/index';
export const gallery = async (galleryId: string) => {
  return await fetchApi(`galleries/${galleryId}/?populate=deep`);
};

export const firstNewsPost = async (jwt?: string) => {
  return await fetchApi('news/1', jwt);
};
