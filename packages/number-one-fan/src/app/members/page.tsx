'use client';
import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { authenticate } from '@/api';
import LoginForm from '@/ui/molecules/LoginForm';
import { members } from '@/api/staticRoutes';

export default function Members() {
  const [user, setUser] = useState({ identifier: '', password: '' });

  const { data } = useQuery(
    queryOptions({
      queryKey: ['hello-world'],
      queryFn: async () => {
        const jwt = await authenticate(user); // TEMP: manually change the cookie domain in @/cookie to have this work on localhost
        const data = await members(jwt);
        const strapi = await data.json();
        return strapi
          ? {
              calendar: strapi.data.attributes.calendar,
              links: strapi.data.attributes.external_links.data.map((link: any) => ({
                text: link.attributes.text,
                url: link.attributes.url,
              })),
            }
          : undefined;
      },
      staleTime: 24 * 60 * 60 * 1000,
    }),
  );

  return (
    <>
      <Headline text={'f*members'} />
      <Wrap>
        {!data && <LoginForm setUser={setUser} queryKey={['hello-world']} />}
        {data && (
          <div>
            {data.links.map((link: any) => (
              <a key={link.text} href={link.url}>
                {link.text}
              </a>
            ))}
          </div>
        )}
        {data && (
          <p>
            <span className="font-bold">{data.calendar}</span>
          </p>
        )}
      </Wrap>
    </>
  );
}
