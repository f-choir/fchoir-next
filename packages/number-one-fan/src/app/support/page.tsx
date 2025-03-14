import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { support } from '@/api/staticRoutes';
import { RichText } from '@/ui/organisms/RichText';
// import Embed from '@/ui/atoms/Embed/Embed';

const getData = async () => {
  const res = await support();
  const strapi = await res.json();

  const { richText, media, embed } = strapi.data.attributes;
  return {
    richText,
    media,
    embed,
  };
};

export default async function Support() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['support'],
      queryFn: getData,
    }),
  );

  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'support us'} />
      <Wrap>
        <RichText richText={data.richText} />
      </Wrap>
      {/*<Embed htmlString={data.embed} />*/}
    </main>
  );
}
