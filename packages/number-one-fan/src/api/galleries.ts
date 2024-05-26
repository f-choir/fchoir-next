import { fetchApi } from '@/api/index';

export const anticGalleryList = async () => {
  return await fetchApi('antic?populate=deep');
};
