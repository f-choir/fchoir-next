import Wrap from '@/ui/atoms/Wrap';
import { GalleryImageProps } from '@/ui/molecules/GalleryView';
import GalleryComponent from '@/ui/molecules/Gallery';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { anticGalleryList } from '@/api/galleries';

const Gallery = ({ params }: { params: { id: string } }) => {
  // const gallery = getGalleryById(params.id);
  // if (!gallery) return null;

  const imagesToViewProps = ({
    imageUrl,
    alt,
  }: {
    imageUrl: string;
    alt?: string;
  }): GalleryImageProps => ({ uri: imageUrl, alt });

  return (
    <Wrap className={'m-auto flex justify-center pt-4'}>
      {/*<GalleryComponent*/}
      {/*  id={gallery.id}*/}
      {/*  title={gallery.title}*/}
      {/*  images={gallery.images.map(imagesToViewProps)}*/}
      {/*/>*/}
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
  const res = await anticGalleryList();
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
