import { getCookie, setCookie } from 'typescript-cookie';

// TODO turn this into config
const DOMAIN = 'fchoir.com';
// const DOMAIN = 'fchoir-number-one-fan.vercel.app';
// const DOMAIN = 'localhost';

export const getCookieNamed = (name: string): string | undefined | null => {
  if (typeof window !== 'undefined') return getCookie(name);
};

export const setCookieWith = (name: string, value: string) => {
  if (typeof window !== 'undefined') {
    setCookie(name, value, {
      domain: DOMAIN,
      expires: 7,
      sameSite: 'None',
      secure: true,
    });
  }
};
