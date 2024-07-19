import Image from 'next/image';

const Bio = (data: any) => {
  return (
    <div className="my-4 mx-2">
      <div className="float-left w-1/3 mb-4 mr-4">
        <Image
          src={data.leader.avatarUrl}
          alt={'altText'}
          width={500}
          height={500}
          className={`aspect-square object-cover`}
        />
      </div>
      <h3 className="text-3xl mb-2">{data.leader.name}</h3>
      <div className="text-2xl mb-2">{data.leader.title}</div>
      {data.leader.bio.map((para: string) => (
        <p className="text-l mb-2 mr-4">{para}</p>
      ))}
      {data.leader.links.map((link: any) => (
        <a href={link.url} className="mr-4 text-purple underline hover:text-black">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Bio;
