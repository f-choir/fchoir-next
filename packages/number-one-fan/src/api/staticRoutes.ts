import { fetchApi } from '@/api/index';

export const home = async () => {
  return await fetchApi('home?populate=deep,14');
};

export const about = async () => {
  return await fetchApi('about?populate=deep,11');
};

export const antics = async () => {
  return await fetchApi('antic?populate=deep');
};

export const merch = async () => {
  return await fetchApi('merch?populate=deep');
};

export const contact = async () => {
  return await fetchApi('contact?populate=deep,15');
};

export const members = async (jwt?: string) => {
  return await fetchApi('member?populate=deep,11', jwt);
};

export const support = async () => {
  return await fetchApi('support?populate=deep');
};
