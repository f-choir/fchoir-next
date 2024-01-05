import Headline from '@/ui/atoms/Headline';
import Image from 'next/image';
import { getImageUrl } from '@/model/image';

export default function Contact() {
  return (
    <main className="min-h-screen pt-12 m:pt-8">
      <Headline text={'contact'} />
      <Image
        className={'m-auto'}
        src={getImageUrl('f-choir-test')}
        alt={'f*choir, grooving'}
        width={400}
        height={400}
      />
    </main>
  );
}
