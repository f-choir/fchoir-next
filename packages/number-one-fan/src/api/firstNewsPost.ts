import { fetchApi } from '@/api/index';

export const firstNewsPost = async () => {
  return await fetchApi('news/1');
};
