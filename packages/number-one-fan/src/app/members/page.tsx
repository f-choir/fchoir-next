'use client';
import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { useQuery } from '@tanstack/react-query';
import { firstNewsPost } from '@/api/firstNewsPost';

export default function Members() {
  const { data } = useQuery({
    queryKey: ['hello-world'],
    queryFn: async () => {
      const data = await firstNewsPost();
      const strapi = await data.json();
      return {
        title: strapi.data.attributes.Title,
        body: strapi.data.attributes.Body[0].children[0].text,
      };
    },
  });

  return (
    <>
      <Headline text={'f*members'} />
      <Wrap>
        <p>Authenticated API Request to Strapi</p>
        {data && (
          <p>
            <span className="font-bold">{`${data.title} `}</span>
            {data.body}
          </p>
        )}
      </Wrap>
    </>
  );
}
