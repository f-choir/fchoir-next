import { getCookieNamed, setCookieWith } from '@/cookie';

const HEROKU_API_ROOT = 'https://fchoir-we-rise-8a87570c698e.herokuapp.com/api';

// TODO this could use a 'dev mode' where it fetches from the local Strapi
/**
 *
 * @param path with prefix `<host>/api/` defining the REST API query to perform against strapi
 * @param jwt auth token
 */
export const fetchApi = async (path: string, jwt?: string): Promise<Response> => {
  const options = jwt ? { headers: { Authorization: `Bearer ${jwt}` } } : {};

  return fetch(`${HEROKU_API_ROOT}/${path}`, options);
};

type StrapiAuthResponse = {
  jwt: string;
};

const postAuth = async (user: any): Promise<StrapiAuthResponse> => {
  const login = await fetch(`${HEROKU_API_ROOT}/auth/local`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const loginResponseData = await login.json();

  return loginResponseData as StrapiAuthResponse;
};

export const authenticate = async (user: {
  identifier: string;
  password: string;
}): Promise<string> => {
  if (!getCookieNamed('f-choir-tkn') && user.identifier && user.password) {
    const login = await postAuth(user);
    login.jwt && setCookieWith('f-choir-tkn', login.jwt);
    return login.jwt;
  }
  return getCookieNamed('f-choir-tkn') ?? '';
};
