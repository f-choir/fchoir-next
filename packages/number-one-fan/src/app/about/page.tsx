import Headline from '@/ui/atoms/Headline';
import { about } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { randomUUID } from 'crypto';
// import VideoPlayer from '@/ui/atoms/VideoPlayer';
import Wrap from '@/ui/atoms/Wrap';
import HorizontalDivider from '@/ui/atoms/HorizontalDivider';
import Embed from '@/ui/atoms/Embed/Embed';
import super8 from '@/app/about/super8';

const aboutPropsFromStrapi = (strapi: any) => {
  return {
    words: strapi.data.attributes.words.flatMap((block: any) =>
      block.children.map((child: any) => child.text),
    ),
    videoId: strapi.data.attributes.video.data.attributes.provider_metadata.public_id,
    // the API should also have an embed. we should only have one up, not both, obvs.
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
      <Wrap>
        {/* This is a demo of our own non-YT video embeds*/}
        {/*<VideoPlayer videoId={data.videoId} />*/}
        <Embed htmlString={super8} />
        {/* we need a component to display the humanifesto */}

        {data.words.map((fragment: string) => (
          <p key={randomUUID()}>{fragment}</p>
        ))}
        <HorizontalDivider />
        <p>Choir Bio Goes Here</p>
        <HorizontalDivider />
        <p>Leader Bios Go Here</p>
        <HorizontalDivider />
        <p>Class of 24 Goes Here</p>
      </Wrap>
    </main>
  );
}
