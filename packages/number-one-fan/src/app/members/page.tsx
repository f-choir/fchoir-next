import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { firstNewsPost } from '@/api/firstNewsPost';

type News = {
  title: string;
  body: string;
};

const getData = async (): Promise<News> => {
  const res = await firstNewsPost();
  const strapi = await res.json();
  return {
    title: strapi.data.attributes.Title,
    body: strapi.data.attributes.Body[0].children[0].text,
  };
};

export default async function Members() {
  const news = await getData();

  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'f*members'} />
      <Wrap>
        <p className="font-bold text-xl">{news.title}</p>
        <p>{news.body}</p>
      </Wrap>
    </main>
  );
}
