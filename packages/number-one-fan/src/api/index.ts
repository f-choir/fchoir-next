const API_ROOT = 'https://eg-27ef25635b494d6e80653fe95e316924.ecs.eu-west-1.on.aws/api';
// const HEROKU_API_ROOT = 'https://fchoir-we-rise-8a87570c698e.herokuapp.com/api';

// TODO this could use a 'dev mode' where it fetches from the local Strapi
/**
 *
 * @param path with prefix `<host>/api/` defining the REST API query to perform against strapi
 * @param jwt auth token
 */
export const fetchApi = async (path: string, jwt?: string): Promise<Response> => {
  const options = jwt ? { headers: { Authorization: `Bearer ${jwt}` } } : {};

  return fetch(`${API_ROOT}/${path}`, options);
};
