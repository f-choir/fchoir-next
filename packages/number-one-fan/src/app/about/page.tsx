import Headline from '@/ui/atoms/Headline';
// import Embed from '@/ui/atoms/Embed/Embed';

// const RICK: string =
//   '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=INGiHrL63avQtahV&amp;start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

export default function About() {
  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'humanifesto'} wrapClasses={'flex flex-row justify-center'} />
      <div className={'py-8'}>{/*<Embed htmlString={RICK} isCentered={true} />*/}</div>
    </main>
  );
}
