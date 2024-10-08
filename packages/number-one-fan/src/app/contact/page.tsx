import Headline from '@/ui/atoms/Headline';
import { contact } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import React from 'react';
import Wrap from '@/ui/atoms/Wrap';
import { randomUUID } from 'node:crypto';
import Embed from '@/ui/atoms/Embed/Embed';
import Image from 'next/image';

const MAILCHIMP_EMBED = `<p>Mailchimp embed goes here</p>`;

const contactPropsFromStrapi = (strapi: any) => {
  return {
    words: strapi.data.attributes.words.flatMap((block: any) =>
      block.children.map((child: any) => child.text),
    ),
    image: { url: strapi.data.attributes.image.data.attributes.url },
  };
};

const getData = async () => {
  const res = await contact();
  const strapi = await res.json();

  console.log('BEEBUG: strapi', strapi.data.attributes.image.data.attributes.url);

  return contactPropsFromStrapi(strapi);
};

export default async function Contact() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['contact'],
      queryFn: getData,
    }),
  );

  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'contact'} />
      <Wrap>
        {data.words.map((line: any, idx: number) =>
          idx === 0 ? (
            <p className="py-4 font-bold text-xl" key={randomUUID()}>
              {line}
            </p>
          ) : (
            <p className="py-2" key={randomUUID()}>
              {line}
            </p>
          ),
        )}
        <p className="py-4 font-bold text-xl">Join our mailing list!</p>
      </Wrap>
      <Embed htmlString={MAILCHIMP_EMBED} />
      <Wrap>
        <p className="py-4 font-bold text-xl">Check our socials: </p>
        <div>
          <Image
            className="pt-4 m-auto"
            src={data.image.url}
            alt={'bar'}
            width={600}
            height={400}
          />
        </div>
      </Wrap>
    </main>
  );
}
