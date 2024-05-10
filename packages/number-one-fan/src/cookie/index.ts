import { getCookie, setCookie } from 'typescript-cookie';

export const getFromLocalStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') return window?.localStorage?.getItem(key);
  return null;
};
export const setToLocalStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') window?.localStorage?.setItem(key, value);
};

export const getCookieNamed = (name: string): string | undefined | null => {
  if (typeof window !== 'undefined') return getCookie(name);
};

export const setCookieWith = (name: string, value: string) => {
  if (typeof window !== 'undefined') setCookie(name, value);
};
