import { fetchApi } from '@/api/index';

export const home = async () => {
  return await fetchApi('home?populate=deep');
};

export const about = async () => {
  return await fetchApi('about?populate=deep,10');
};

export const antics = async () => {
  return await fetchApi('antic?populate=deep');
};

export const merch = async () => {
  return await fetchApi('merch?populate=deep');
};

export const contact = async () => {
  return await fetchApi('contact?populate=deep');
};
