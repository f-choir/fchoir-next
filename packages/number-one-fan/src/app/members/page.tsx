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
      const login = await postAuth(user);
      const data = await firstNewsPost(login.jwt ?? undefined);
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
