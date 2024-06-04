import Headline from '@/ui/atoms/Headline';
import { about } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';

const aboutPropsFromStrapi = (strapi: any) => {
  console.log('BEEBUG: about', strapi);
  return strapi;
};

const getData = async () => {
  const res = await about();
  const strapi = await res.json();
  return aboutPropsFromStrapi(strapi);
};

export default async function About() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['about'],
      queryFn: getData,
    }),
  );

  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'humanifesto'} wrapClasses={'flex flex-row justify-center'} />
      <div className={'py-8'}>{/*<Embed htmlString={RICK} isCentered={true} />*/}</div>
    </main>
  );
}
