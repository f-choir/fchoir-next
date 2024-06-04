import Headline from '@/ui/atoms/Headline';
import { contact } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';

const contactPropsFromStrapi = (strapi: any) => {
  return strapi;
};

const getData = async () => {
  const res = await contact();
  const strapi = await res.json();
  return contactPropsFromStrapi(strapi);
};

export default async function Contact() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['contact'],
      queryFn: getData,
    }),
  );

  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'contact'} />
    </main>
  );
}
