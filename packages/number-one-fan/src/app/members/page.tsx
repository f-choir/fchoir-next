'use client';
import Headline from '@/ui/atoms/Headline';
import Wrap from '@/ui/atoms/Wrap';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { authenticate } from '@/api';
import LoginForm from '@/ui/molecules/LoginForm';
import { members } from '@/api/staticRoutes';
import Embed from '@/ui/atoms/Embed/Embed';
import SquareImage from '@/ui/atoms/SquareImage';
import PortraitImage from '@/ui/atoms/PortraitImage';
import Grid from '@/ui/atoms/Grid';
import SubHeader from '@/ui/atoms/SubHeader';

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
              polaroids: strapi.data.attributes.cohorts.data
                .sort(
                  (a: any, b: any) =>
                    Number(b.attributes.startDate.split('-')[0]) -
                    Number(a.attributes.startDate.split('-')[0]),
                )[0]
                .attributes.singers.data.filter((singer: any) =>
                  Boolean(singer.attributes.avatar.data),
                )
                .map((singer: any) => ({
                  firstName: singer.attributes.firstName,
                  url: singer.attributes.avatar.data.attributes.url,
                }))
                .sort((a: any, b: any) => (a.firstName > b.firstName ? 1 : -1)),
            }
          : undefined;
      },
      staleTime: 24 * 60 * 60 * 1000,
    }),
  );

  return (
    <>
      <Headline text={'f*members'} textClasses={'text-white'} />
      <Wrap>
        {!data && <LoginForm setUser={setUser} queryKey={['hello-world']} />}
        {data && (
          <div className="flex flex-row justify-center pb-4">
            {data.links.map((link: any) => (
              <div key={link.text} className="p-8 m-2 w-1/3 text-l m:text-2xl bg-green text-center text-black font-workSans rounded-xl">
                <a href={link.url}>{link.text}</a>
              </div>
            ))}
          </div>
        )}
        {/* embed the Google calendar - enabled in API */}
        {data && <Embed htmlString={data.calendar} />}
        {data && (
          <>
            <SubHeader text={'we are f* choir'} className={'my-4'} inverted />
            <ul
              className={
                'grid grid-cols-2 m:grid-cols-3 l:grid-cols-4 xl:grid-cols-5 px-8 m:px-0 gap-4 my-4'
              }
            >
              {data.polaroids.map((polaroid: any, idx: number) => (
                <li className="p-1" key={polaroid.url}>
                  <PortraitImage
                    src={polaroid.url}
                    altText={polaroid.firstName}
                    size={180}
                    style={{ margin: 'auto' }}
                    isPreloaded={idx <= 4}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </Wrap>
    </>
  );
}
