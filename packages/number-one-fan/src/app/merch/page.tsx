import Headline from '@/ui/atoms/Headline';
import Gallery from '@/ui/molecules/Gallery';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { merch } from '@/api/merch';

const merchPropsfromStrapi = (strapi: any) => {
  const {
    data: {
      attributes: {
        gallery: {
          data: {
            attributes: {
              gallery_images: { data: galleryImages },
            },
          },
        },
      },
    },
  } = strapi;

  return galleryImages.map((galleryImage: any) => {
    const {
      attributes: {
        img: { data: imageData },
      },
    } = galleryImage;
    return {
      uri: imageData.attributes.url,
      alt: galleryImage.attributes.caption,
    };
  });
};

const getData = async () => {
  const res = await merch();
  const strapi = await res.json();
  return merchPropsfromStrapi(strapi);
};
export default async function Merch() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['merch'],
      queryFn: getData,
    }),
  );

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
        <Gallery id={''} title={''} pathOverride={true} images={data} />
      </div>
    </main>
  );
}
