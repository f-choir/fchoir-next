import galleries, { getGalleryById } from '@/model/galleries';
import SubHeader from '@/ui/atoms/SubHeader';
import Wrap from '@/ui/atoms/Wrap';
import ImageGrid from '@/ui/molecules/ImageGrid';

const Gallery = ({ params }: { params: { id: string } }) => {
  const gallery = getGalleryById(params.id);
  if (!gallery) return null;

  return (
    <Wrap className={'m-auto flex justify-center pt-4'}>
      <div className={'flex flex-col p-2'}>
        <SubHeader text={gallery.title} className={'inline-block'} />
        <ImageGrid images={gallery.images.slice(0, 9).map((image) => image.imageUrl)} />
      </div>
    </Wrap>
  );
};

export async function generateStaticParams() {
  return galleries().map((gallery) => ({ id: gallery }));
}

export default Gallery;
