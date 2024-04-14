import { fetchApi } from '@/api/index';

export const firstImageTest = async () => {
  return await fetchApi('image-tests/1?populate=media');
};
