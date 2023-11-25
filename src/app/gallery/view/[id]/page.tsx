import galleries from '@/model/galleries';

const GalleryView = ({ params }: { params: { id: string } }) => (
  <div>{`Gallery view for ${params.id}`}</div>
);

export async function generateStaticParams() {
  return galleries().map((gallery) => ({ id: gallery }));
}

export default GalleryView;
