import Headline from '@/ui/atoms/Headline';
import { about } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { randomUUID } from 'crypto';
import VideoPlayer from '@/ui/atoms/VideoPlayer';

const aboutPropsFromStrapi = (strapi: any) => {
  // console.log(
  //   'BEEBUG: strapi.data.attributes.video',
  //   strapi.data.attributes.video.data.attributes.provider_metadata.public_id,
  // );

  return {
    words: strapi.data.attributes.words.flatMap((block: any) =>
      block.children.map((child: any) => child.text),
    ),
    videoId: strapi.data.attributes.video.data.attributes.provider_metadata.public_id,
  };
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
      <VideoPlayer videoId={data.videoId} />
      {data.words.map((fragment: string) => (
        <p key={randomUUID()}>{fragment}</p>
      ))}
    </main>
  );
}
