import Headline from '@/ui/atoms/Headline';
import { about } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';

const aboutPropsFromStrapi = (strapi: any) => {
  console.log('BEEBUG: strapi.data.attributes.video', strapi.data.attributes.video);

  const result = {
    words: strapi.data.attributes.words.flatMap((block: any) =>
      block.children.map((child: any) => child.text),
    ),
    video: strapi.data.attributes.video,
  };

  return result;
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
      {/* video embed here */}
      {/* simple mapping of words for now */}
      {data.words.map((fragment: string) => (
        <p>{fragment}</p>
      ))}
    </main>
  );
}
