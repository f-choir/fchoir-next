const API_ROOT = 'https://lhq3c616pl.execute-api.eu-west-1.amazonaws.com/api'; // when serving the ECS backend
// const API_ROOT = 'https://hive.tail8348d8.ts.net/api'; // when serving the local build via Tailscale

/**
 *
 * @param path with prefix `<host>/api/` defining the REST API query to perform against strapi
 * @param jwt auth token
 */
export const fetchApi = async (path: string, jwt?: string): Promise<Response> => {
  const options = jwt ? { headers: { Authorization: `Bearer ${jwt}` } } : {};

  return fetch(`${API_ROOT}/${path}`, options);
};
