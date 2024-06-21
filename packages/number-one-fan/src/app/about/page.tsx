import Headline from '@/ui/atoms/Headline';
import { about } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import VideoPlayer from '@/ui/atoms/VideoPlayer';
import Wrap from '@/ui/atoms/Wrap';
import HorizontalDivider from '@/ui/atoms/HorizontalDivider';
// import Embed from '@/ui/atoms/Embed/Embed';
// import super8 from '@/app/about/super8';
import Humanifesto from '@/ui/organisms/Humanifesto';

const aboutPropsFromStrapi = (strapi: any) => {
  console.log('BEEBUG: strapi', strapi);

  return {
    words: strapi.data.attributes.words.flatMap((block: any) =>
      block.children.map((child: any) => child.text),
    ),
    videoId: strapi.data.attributes.video.data.attributes.provider_metadata.public_id,
    // the API should also have an embed. we should only have one up, not both, obvs.
    choirBio: strapi.data.attributes.choirBio?.flatMap((block: any) =>
      block.children.map((child: any) => child.text),
    ),
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
        {/*This is a demo of our own non-YT video embeds*/}
        <VideoPlayer videoId={data.videoId} />
        {/*<Embed htmlString={super8} />*/}
        <Humanifesto words={data.words} />
        <HorizontalDivider />
        {data.choirBio?.map((para: string) => <p className="px-2 py-4 font-medium">{para}</p>)}
        <HorizontalDivider />
        <p>Leader Bios Go Here</p>
        <HorizontalDivider />
        <p>Class of 24 Goes Here</p>
      </Wrap>
    </main>
  );
}
