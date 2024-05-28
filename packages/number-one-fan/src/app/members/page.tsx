'use client';
import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { authenticate } from '@/api';
import LoginForm from '@/ui/molecules/LoginForm';
import { firstNewsPost } from '@/api/dynamicRoutes';

export default function Members() {
  const [user, setUser] = useState({ identifier: '', password: '' });

  const { data } = useQuery(
    queryOptions({
      queryKey: ['hello-world'],
      queryFn: async () => {
        const jwt = await authenticate(user); // TEMP: manually change the cookie domain in @/cookie to have this work on localhost
        const data = await firstNewsPost(jwt);
        const strapi = await data.json();
        return {
          title: strapi.data.attributes.Title,
          body: strapi.data.attributes.Body[0].children[0].text,
        };
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
          <p>
            <span className="font-bold">{`${data.title ? data.title : ''} `}</span>
            {data.body}
          </p>
        )}
      </Wrap>
    </>
  );
}
