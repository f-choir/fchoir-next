import Headline from '@/ui/atoms/Headline';
import GalleryGrid from '@/ui/molecules/GalleryGrid';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { anticGalleryList } from '@/api/galleries';
import { GalleryPreviewProps } from '@/ui/molecules/GalleryPreview';

const galleryPreviewPropsFromStrapi = (strapi: any): GalleryPreviewProps[] => {
  const {
    data: {
      attributes: {
        galleries: { data: galleryData },
      },
    },
  } = strapi;

  const props = galleryData.map((gallery: any) => {
    const {
      attributes: {
        gallery_images: { data: imageData },
      },
    } = gallery;

    const {
      attributes: {
        img: {
          data: {
            attributes: { url },
          },
        },
      },
    } = imageData[0];

    return {
      size: 256,
      titleText: gallery.attributes.title,
      imgSrc: url,
      uri: gallery.id,
    };
  });

  return props as GalleryPreviewProps[];
};

const getData = async () => {
  const res = await anticGalleryList();
  return await res.json();
};

export default async function Antics() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['antics'],
      queryFn: getData,
    }),
  );
  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'antics'} />
      <GalleryGrid galleries={galleryPreviewPropsFromStrapi(data)} />
    </main>
  );
}
