'use client'

import Image from 'next/image';
import { useState } from 'react';

const Bio = ({ leader }: { leader: any }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className="my-8 mx-2 text-white">
      <div className="float-left w-1/3 mb-4 mr-4">
        <Image
          src={leader.avatarUrl}
          alt={'altText'}
          width={500}
          height={500}
          className={`aspect-square object-cover pr-2`}
        />
      </div>
      <h3 className="text-3xl mb-2 font-bastardoSemi">{leader.name}</h3>
      <div className="text-2xl mb-2 font-bastardoSemi" >{leader.title}</div>
      {leader.bio.map((para: string, idx: number) => {
         return (
           <>
             {idx === 0 || isShowMore ? (
               <p key={`leader-bio-${idx}`} className="text-l l:text-xl mb-2 mr-4">
                 {para}
               </p>
             ) : null}
             {idx === 0 && !isShowMore ? (
               <div>
                 <button
                   className={'pr-2 pb-2 underline text-white hover:text-black font-bold font-nanHolo'}
                   onClick={() => setIsShowMore(true)}
                 >
                   show more...
                 </button>
               </div>
             ) : null}
             {idx === leader.bio.length - 1 && isShowMore ? (
               <div><button
                 className={'pr-2 pb-2 underline text-white hover:text-black font-bold font-nanHolo'}
                 onClick={() => setIsShowMore(false)}
               >
                 show less
               </button>
               </div>
             ) : null}
           </>
         );
      })}
      {leader.links.map((link: any, idx: number) => (
        <a
          key={`leader-links-${idx}`}
          href={link.url}
          className="mr-4 text-white underline hover:text-black font-nanHolo"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Bio;
