import Image from 'next/image';

const Bio = ({ leader }: { leader: any }) => {
  return (
    <div className="my-4 mx-2 text-white">
      <div className="float-left w-1/3 mb-4 mr-4">
        <Image
          src={leader.avatarUrl}
          alt={'altText'}
          width={500}
          height={500}
          className={`aspect-square object-cover`}
        />
      </div>
      <h3 className="text-3xl mb-2 font-bastardoSemi">{leader.name}</h3>
      <div className="text-2xl mb-2 font-bastardoSemi" >{leader.title}</div>
      {leader.bio.map((para: string, idx: number) => (
        <p key={`leader-bio-${idx}`} className="text-l mb-2 mr-4">
          {para}
        </p>
      ))}
      {leader.links.map((link: any, idx: number) => (
        <a
          key={`leader-links-${idx}`}
          href={link.url}
          className="mr-4 text-white underline hover:text-black"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Bio;
