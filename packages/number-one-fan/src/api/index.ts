const HEROKU_API_ROOT = 'https://fchoir-we-rise-8a87570c698e.herokuapp.com/api';
// TODO this could use a 'dev mode' where it fetches from the local Strapi
export const fetchApi = async (path: string, jwt?: string): Promise<Response> => {
  const options = jwt ? { headers: { Authorization: `Bearer ${jwt}` } } : {};

  return fetch(`${HEROKU_API_ROOT}/${path}`, options);
};

type StrapiAuthResponse = {
  jwt: string;
};

export const postAuth = async (user: any): Promise<StrapiAuthResponse> => {
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
