import galleries, { getGalleryById } from '@/model/galleries';
import Wrap from '@/ui/atoms/Wrap';
import { GalleryImageProps } from '@/ui/molecules/GalleryView';
import GalleryComponent from '@/ui/molecules/Gallery';

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

// export async function generateStaticParams() {
//   return galleries().map((gallery) => ({ id: gallery }));
// }

export default Gallery;
