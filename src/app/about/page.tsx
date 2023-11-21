import Headline from '@/ui/atoms/Headline';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12 m:pt-8">
      <Headline text={'humanifesto'} wrapClasses={'flex flex-row justify-center'} />
    </main>
  );
}
