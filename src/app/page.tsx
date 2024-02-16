import Headline from '@/ui/atoms/Headline';
import SubHeader from '@/ui/atoms/SubHeader';
import AttractGallery from '@/ui/molecules/AttractGallery/AttractGallery';

export default function Home() {
  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <div className={'absolute top-24 m:top-28 left-1/5 m:left-4/5 l:left-1/3 xl:left-1/2'}>
        <Headline text={'f*choir'} wrapClasses={'relative z-20'} />
      </div>
      <div className={'pt-20'}>
        <AttractGallery id={'test-gallery'} interval={2000} />
        <SubHeader
          className={'text-center -mt-16 mb-8'}
          text={'causing a racket // singing together'}
        />
      </div>
    </main>
  );
}
