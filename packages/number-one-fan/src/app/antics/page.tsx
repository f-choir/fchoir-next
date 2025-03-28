import Headline from '@/ui/atoms/Headline';
import GalleryGrid from '@/ui/molecules/GalleryGrid';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { GalleryPreviewProps } from '@/ui/molecules/GalleryPreview';
import { antics } from '@/api/staticRoutes';

const galleryPreviewPropsFromStrapi = (strapi: any): GalleryPreviewProps[] => {
  const {
    data: {
      attributes: {
        galleries: { data: galleryData },
      },
    },
  } = strapi;

  const props = galleryData
    .map((gallery: any) => {
      const {
        attributes: {
          hero_image: { data: heroImageData },
        },
      } = gallery;

      if (!heroImageData) return null;

      const {
        attributes: {
          img: {
            data: {
              attributes: { url },
            },
          },
        },
      } = heroImageData;

      return {
        size: 256,
        titleText: gallery.attributes.title,
        imgSrc: url,
        uri: gallery.id,
        date: gallery.attributes.date,
      };
    })
    .filter(Boolean);

  props.sort(
    (a: GalleryPreviewProps, b: GalleryPreviewProps) =>
      Date.parse(b.date || '') - Date.parse(a.date || ''),
  );

  return props as GalleryPreviewProps[];
};

const getData = async () => {
  const res = await antics();
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
