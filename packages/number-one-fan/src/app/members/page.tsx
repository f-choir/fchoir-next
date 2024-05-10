'use client';
import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { queryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { firstNewsPost } from '@/api/firstNewsPost';
import { useState } from 'react';
import { authenticate } from '@/api';
import { getCookieNamed } from '@/cookie';
import LoginForm from '@/ui/molecules/LoginForm';

export default function Members() {
  const [user, setUser] = useState({ identifier: '', password: '' });

  const { data } = useQuery(
    queryOptions({
      queryKey: ['hello-world'],
      queryFn: async () => {
        const jwt = await authenticate(user);
        const data = await firstNewsPost(jwt);
        const strapi = await data.json();
        return {
          title: strapi.data.attributes.Title,
          body: strapi.data.attributes.Body[0].children[0].text,
        };
      },
      staleTime: 24 * 60 * 60 * 1000,
      // retryDelay: (attempt) => attempt * 60 * 1000,
    }),
  );

  return (
    <>
      <Headline text={'f*members'} />
      <Wrap>
        {!getCookieNamed('f-choir-tkn') && (
          <LoginForm setUser={setUser} queryKey={['hello-world']} />
        )}
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
