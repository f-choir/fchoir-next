import galleries from '@/model/galleries';

const Gallery = ({ params }: { params: { id: string } }) => (
  <div>gallery page for id {params.id}</div>
);

export async function generateStaticParams() {
  return galleries.map((gallery) => ({ id: gallery }));
}

export default Gallery;
