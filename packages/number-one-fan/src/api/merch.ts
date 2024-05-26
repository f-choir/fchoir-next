import { fetchApi } from '@/api/index';

export const merch = async () => {
  return await fetchApi('merch?populate=deep');
};
