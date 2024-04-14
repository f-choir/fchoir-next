import Headline from '@/ui/atoms/Headline';
import GalleryGrid from '@/ui/molecules/GalleryGrid';
import { getGalleryPreviews } from '@/model/galleries';

export default function Antics() {
  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'antics'} />
      {/*<GalleryGrid galleries={getGalleryPreviews()} />*/}
    </main>
  );
}
