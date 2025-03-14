import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { support } from '@/api/staticRoutes';
import Embed from '@/ui/atoms/Embed/Embed';

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
  console.log('BEEBUG: data', data);

  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'support us'} />
      <Wrap>
        <p>
          Under construction. do we still say that about webpages now it&apos;s not the &apos;90s?
        </p>
      </Wrap>
      {/*<Embed htmlString={data.embed} />*/}
    </main>
  );
}
