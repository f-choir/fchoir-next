import Headline from '@/ui/atoms/Headline';
import SubHeader from '@/ui/atoms/SubHeader';
import AttractGallery from '@/ui/molecules/AttractGallery/AttractGallery';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { home } from '@/api/staticRoutes';

const homePropsFromStrapi = (strapi: any) => {
  console.log('BEEBUG: strapi', strapi.data.attributes.galleries);

  return strapi;
};

const getData = async () => {
  const res = await home();
  const strapi = await res.json();
  return homePropsFromStrapi(strapi);
};

export default async function Home() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['home'],
      queryFn: getData,
    }),
  );
  return (
    <main className="pt-12 m:pt-8">
      <div className={'absolute top-24 m:top-28 left-1/5 m:left-4/5 l:left-1/3 xl:left-1/2'}>
        <Headline text={'f*choir'} wrapClasses={'relative z-20'} />
      </div>
      <div className={'pt-20'}>
        <AttractGallery id={'test-gallery'} interval={2000} />
        {/*// TODO refactor AttractGallery to take Strapi gallery*/}
        <SubHeader
          className={'relative top-0 m:-top-16 l:-top-24 text-center mb-8'}
          text={'causing a racket // singing together'}
        />
      </div>
    </main>
  );
}
