const HEROKU_API_ROOT = 'https://fchoir-we-rise-8a87570c698e.herokuapp.com/api';

export const fetchApi = async (path: string): Promise<Response> => {
  return fetch(`${HEROKU_API_ROOT}/${path}`);
};
