import Headline from '@/ui/atoms/Headline';
import Gallery from '@/ui/molecules/Gallery';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { merch } from '@/api/staticRoutes';
import { RichText } from '@/ui/organisms/RichText';
import Wrap from '@/ui/atoms/Wrap';
import GalleryPreview from '@/ui/molecules/GalleryPreview';

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

  return {
    gallery: galleryImages.map((galleryImage: any) => {
      const {
        attributes: {
          img: { data: imageData },
        },
      } = galleryImage;
      return {
        uri: imageData.attributes.url,
        alt: galleryImage.attributes.caption,
      };
    }),
    pitchText: strapi.data.attributes.pitchText,
    merchItems: strapi.data.attributes.merchItems,
  };
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
    <main className="min-h-screen pt-12 m:pt-8 bg-blue">
      <Headline text={'merch'} />
      <Wrap>
        <RichText richText={data.pitchText} className={'text-2xl text-center pb-4 text-white'} />
        <div className={'flex flex-row gap-4 justify-center'}>
          {data.merchItems?.data.map((merchItem: any) => {
            return (
              <GalleryPreview
                size={256}
                titleText={merchItem.attributes.title}
                imgSrc={merchItem.attributes.imgs.data[0].attributes.url}
                uri={merchItem.attributes.vendorUrl}
                isUnoptimised={true}
                key={`${merchItem.attributes.title?.slice(0, 8)}-${Math.floor(
                  Math.random() * 2048,
                )}`}
              />
            );
          })}
        </div>
      </Wrap>
    </main>
  );
}
