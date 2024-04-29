'use client';
import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { firstNewsPost } from '@/api/firstNewsPost';
import { useState } from 'react';
import { postAuth } from '@/api';

export default function Members() {
  const [userField, setUserField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [user, setUser] = useState({ identifier: '', password: '' });

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['hello-world'],
    queryFn: async () => {
      if (!window.localStorage.getItem('f-choir-tkn')) {
        const login = await postAuth(user);
        login.jwt && window.localStorage.setItem('f-choir-tkn', login.jwt);
      }
      const jwt = window.localStorage.getItem('f-choir-tkn');
      const data = await firstNewsPost(jwt ?? undefined);
      const strapi = await data.json();
      return {
        title: strapi.data.attributes.Title,
        body: strapi.data.attributes.Body[0].children[0].text,
      };
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

  return (
    <>
      <Headline text={'f*members'} />
      <Wrap>
        {!window.localStorage.getItem('f-choir-tkn') && ( // TODO change this code to use a cookie, and refactor all this auth code to be nice.
          <form onSubmit={() => false}>
            <label htmlFor="user">user</label>
            <input
              type="text"
              name="user"
              value={userField}
              onChange={(e) => setUserField(e.target.value)}
            />
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={passwordField}
              onChange={(e) => setPasswordField(e.target.value)}
            />
            <input
              type="button"
              value="go"
              onClick={() => {
                setUser({ identifier: userField, password: passwordField });
                queryClient.invalidateQueries({ queryKey: ['hello-world'] });
              }}
            />
          </form>
        )}
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
