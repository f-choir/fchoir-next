import Headline from '@/ui/atoms/Headline';
import { about } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import VideoPlayer from '@/ui/atoms/VideoPlayer';
import Wrap from '@/ui/atoms/Wrap';
import HorizontalDivider from '@/ui/atoms/HorizontalDivider';
// import Embed from '@/ui/atoms/Embed/Embed';
// import super8 from '@/app/about/super8';
import Humanifesto from '@/ui/organisms/Humanifesto';
import Bio from '@/ui/organisms/Bio';
import Cohort from '@/ui/organisms/Cohort';
import Flair from '@/ui/molecules/Flair';

const aboutPropsFromStrapi = (strapi: any) => {
  const cohortYear = Number(strapi.data.attributes.cohort.data.attributes.startDate.slice(0, 4));

  return {
    words: strapi.data.attributes.words.flatMap((block: any) =>
      block.children.map((child: any) => child.text),
    ),
    videoId: strapi.data.attributes.video.data.attributes.provider_metadata.public_id,
    // the API should also have an embed. we should only have one up, not both, obvs.
    choirBio: strapi.data.attributes.choirBio?.flatMap((block: any) =>
      block.children.map((child: any) => child.text),
    ),
    leaders: strapi.data.attributes.leaders.data.map((leader: any) => ({
      name: leader.attributes.name,
      avatarUrl: leader.attributes.avatar.data.attributes.url,
      title: leader.attributes.title,
      bio: leader.attributes.bio
        .flatMap((block: any) => block.children.map((child: any) => child.text))
        .map((text: string) => text?.trim())
        .filter((text: string) => Boolean(text)),
      links: leader.attributes.bio
        .filter((block: any) => block.children.find((child: any) => child.type === 'link'))
        .flatMap((block: any) => block.children.filter((child: any) => child.type === 'link'))
        .map((link: any) => ({ url: link.url, label: link.children[0].text })),
    })),
    cohort: {
      title: `Current Voices - ${cohortYear} - ${cohortYear + 1}`,
      names: strapi.data.attributes.cohort.data.attributes.singers.data.map((singer: any) =>
        singer.attributes.name
          ? singer.attributes.name
          : `${singer.attributes.firstName} ${singer.attributes.lastName}`,
      ),
    },
    flair: {
      items: strapi.data.attributes.flair.data.map((item: any) => ({
        url: item.attributes.img.data.attributes.url,
      })),
    },
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

  const player = <VideoPlayer videoId={data.videoId} />;

  return (
    <main className="min-h-screen pt-12 m:pt-8 bg-pink">
      <Headline text={'humanifesto'} wrapClasses={'flex flex-row justify-center my-2'} />
      <Wrap>
        {/*This is a demo of our own non-YT video embeds*/}
        {/*<VideoPlayer videoId={data.videoId} />*/}
        {player}
        {/*<Embed htmlString={super8} />*/}
        <Humanifesto words={data.words} />
        <HorizontalDivider />
        {data.choirBio?.map((para: string, idx: number) => (
          <p className="px-2 pt-5 pb-3 font-medium text-white" key={`bio-${idx}`}>
            {para}
          </p>
        ))}
        <HorizontalDivider />
        <Bio leader={data.leaders[0]} />
        <HorizontalDivider />
        <Cohort cohort={data.cohort} />
        <HorizontalDivider />
        <Flair flair={data.flair} />
      </Wrap>
    </main>
  );
}
