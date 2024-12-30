import Image from 'next/image';

const Flair = ({ flair }: { flair: any }) => {
  return (
    <div className="pb-2">
      <h3 className="text-center text-2xl mt-2 text-red">SUPPORTED BY</h3>
      {flair.items.map((item: any) => (
        <Image
          src={item.url}
          alt=""
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: '40%', height: 'auto' }}
          className={'m-auto p-2'}
          key={`flair-${item.url.slice(0, 8)}`}
        />
      ))}
    </div>
  );
};

export default Flair;
