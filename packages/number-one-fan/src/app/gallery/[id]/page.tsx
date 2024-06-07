import Wrap from '@/ui/atoms/Wrap';
import GalleryComponent from '@/ui/molecules/Gallery';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { gallery } from '@/api/dynamicRoutes';
import { antics } from '@/api/staticRoutes';

const galleryFromApi = (strapi: any) => {
  const {
    data: {
      attributes: { gallery_images: galleryImages },
    },
  } = strapi;

  return {
    id: `${strapi.data.id}`,
    title: strapi.data.attributes.title,
    images: galleryImages,
  };
};
const getData = (id: string) => async () => {
  const res = await gallery(id);
  const strapi = await res.json();
  return galleryFromApi(strapi);
};
const Gallery = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  const {
    id,
    title,
    images: { data: imageData },
  } = await queryClient.fetchQuery(
    queryOptions({
      queryKey: [`gallery-${params.id}`],
      queryFn: getData(params.id),
    }),
  );

  return (
    <Wrap className={'m-auto flex justify-center pt-4'}>
      <GalleryComponent
        id={id}
        title={title}
        images={imageData.map((image: any) => {
          return {
            uri: image.attributes.img.data.attributes.url,
            alt: image.attributes.caption,
          };
        })}
      />
    </Wrap>
  );
};

const paramsFromStrapi = (strapi: any) => {
  const {
    data: {
      attributes: {
        galleries: { data: galleryData },
      },
    },
  } = strapi;

  return galleryData.map((gallery: any) => ({ id: `${gallery.id}` }));
};

const getParams = async () => {
  const res = await antics();
  return await res.json();
};

export async function generateStaticParams() {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['gallery-list'],
      queryFn: getParams,
    }),
  );
  return paramsFromStrapi(data);
}

export default Gallery;
