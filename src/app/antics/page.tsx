import Headline from '@/ui/atoms/Headline';
import GalleryGrid from '@/ui/molecules/GalleryGrid';
import galleries from '@/model/galleries';

export default function Antics() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12 m:pt-8">
      <Headline text={'antics'} />
      <GalleryGrid galleries={galleries()} />
    </main>
  );
}
