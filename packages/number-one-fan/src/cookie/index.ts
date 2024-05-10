import { getCookie, setCookie } from 'typescript-cookie';

export const getCookieNamed = (name: string): string | undefined | null => {
  if (typeof window !== 'undefined') return getCookie(name);
};

export const setCookieWith = (name: string, value: string) => {
  if (typeof window !== 'undefined') setCookie(name, value);
};
