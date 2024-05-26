import Headline from '@/ui/atoms/Headline';
import Gallery from '@/ui/molecules/Gallery';
import { firstImageTest } from '@/api/firstImageTest';
import { merch } from '@/api/merch';

const getData = async () => {
  const res = await firstImageTest();
  const strapi = await res.json();
  const dataItem = {
    uri: strapi.data.attributes.media.data.attributes.url,
    alt: strapi.data.attributes.description,
  };
  return [dataItem, dataItem, dataItem];
};
// const getData = async () => {
//   const res = await merch();
//   const strapi = await res.json();
//   console.log('BEEBUG: strapi', strapi);
//   return [];
// };
export default async function Merch() {
  const merchImages = await getData();

  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'merch'} />
      <p className={'text-center text-xl m:text-2xl py-8 w-5/6 m:w-3/4 l:w-2/3 xl:w-1/2 m-auto'}>
        Roll up, roll up, we&apos;ve got t-shirts! Head over to our{' '}
        <a
          className={'text-purple underline hover:text-black'}
          href={'https://fchoir.bandcamp.com/merch'}
        >
          Bandcamp
        </a>{' '}
        to grab one of these limited edition, handpainted beauties while stocks last x
      </p>
      <div className={'flex flex-row justify-center'}>
        <Gallery id={''} title={''} pathOverride={true} images={merchImages} />
      </div>
    </main>
  );
}
