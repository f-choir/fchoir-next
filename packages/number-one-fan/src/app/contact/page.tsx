import Headline from '@/ui/atoms/Headline';
import { contact } from '@/api/staticRoutes';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import React from 'react';
import Wrap from '@/ui/atoms/Wrap';
import { randomUUID } from 'node:crypto';
import Image from 'next/image';

const contactPropsFromStrapi = (strapi: any) => {
  const words = strapi.data.attributes.words.map((para: any) => {
    return para.children.map((child: any) => {
      switch (child.type) {
        case 'text':
          return { type: child.type, text: child.text, bold: child.bold };
        case 'link':
          return { type: child.type, text: child.children[0].text, url: child.url };
      }
    });
  });
  return {
    words: words,
    image: { url: strapi.data.attributes.image.data.attributes.url },
  };
};

const getData = async () => {
  const res = await contact();
  const strapi = await res.json();

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
        {data.words.map(
          (line: any, idx: number) => (
            <p className="py-2" key={randomUUID()}>
              {line.map((fragment: any) => {
                switch (fragment.type) {
                  case 'text':
                    return (
                      <span className={`${fragment.bold && 'font-bold'}`} key={randomUUID()}>
                        {fragment.text}
                      </span>
                    );
                  case 'link':
                    return (
                      <span className="text-purple underline hover:text-black">
                        <a href={fragment.url}>{fragment.text}</a>
                      </span>
                    );
                }
              })}
            </p>
          ),
          // ),
        )}
      </Wrap>
      <Wrap>
        <div className="py-4 font-bold text-xl">
          Find us elsewhere:
          <div className="flex flex-row">
            <a className="pr-2" href="https://www.facebook.com/fchoirlondon">
              Facebook
            </a>
            <a className="pr-2" href="https://www.youtube.com/channel/UCyJFkmsdMkAe0GhZonQdctQ">
              YouTube
            </a>
            <a href="https://www.instagram.com/f__choir/">Instagram</a>
          </div>
        </div>
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
