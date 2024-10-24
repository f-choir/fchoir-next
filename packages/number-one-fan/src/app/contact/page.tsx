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

  const socials = strapi.data.attributes.external_links.data.map((link: any) => ({
    url: link.attributes.url,
    img: link.attributes.img.data.attributes.url,
  }));

  console.log(socials);

  return {
    words: words,
    image: { url: strapi.data.attributes.image.data.attributes.url },
    socials: socials,
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
                      <span className="text-purple underline hover:text-black" key={randomUUID()}>
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
          <div className="flex flex-row">
            <div>Find us elsewhere:</div>
            {data.socials.map((social: any) => (
              <a href={social.url} className="pl-2" key={randomUUID()}>
                <Image src={social.img} width={32} height={32} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <Image
            className="py-4 m-auto"
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
