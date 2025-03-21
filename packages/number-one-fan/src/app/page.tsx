import Headline from '@/ui/atoms/Headline';
import SubHeader from '@/ui/atoms/SubHeader';
import AttractGallery from '@/ui/molecules/AttractGallery/AttractGallery';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { home } from '@/api/staticRoutes';
import Image from 'next/image';
import Wrap from '@/ui/atoms/Wrap';
import Link from 'next/link';

const homePropsFromStrapi = (strapi: any) => {
  const galleries = strapi.data.attributes.galleries.data.map((gallery: any) => ({
    galleryId: gallery.id,
    galleryTitle: gallery.attributes.title,
    galleryDescription: gallery.attributes.short_description,
    imgUrl: gallery.attributes.hero_image.data.attributes.img.data.attributes.url,
    imgAlt: gallery.attributes.hero_image.data.attributes.img.data.attributes.alternativeText,
  }));

  const socials = strapi.data.attributes.socials.data.map((social: any) => {
    return { url: social.attributes.url, img: social.attributes.img.data.attributes.url };
  });
  return { galleries, socials };
};

const getData = async () => {
  const res = await home();
  const strapi = await res.json();
  return homePropsFromStrapi(strapi);
};

export default async function Home() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery(
    queryOptions({
      queryKey: ['home'],
      queryFn: getData,
    }),
  );

  return (
    <main className="pt-12 m:pt-8">
      <div
        className={
          'absolute top-16 m:top-28 l:top-36 xl:top-32 left-1/5 m:left-4/5 l:left-1/3 xl:left-1/2'
        }
      >
        <Headline text={'f*choir'} wrapClasses={'relative z-20'} />
      </div>
      <Wrap className="hidden l:inline-block">
        <div className="font-bold ml-[10rem] xl:ml-[18rem] mt-[4rem] xl:mt-[2rem] xl:mb-[1rem]">
          <h2 className="text-xl font-bold pl-2 pb-4 l:-mt-[4rem] xl:-mt-[3rem] justify-self-center">
            March 2025: our{' '}
            <Link
              className="text-purple underline"
              href="https://www.crowdfunder.co.uk/p/fchoir2025"
              target="_blank"
            >
              Crowdfunder
            </Link>{' '}
            is live!
          </h2>
          <div className="flex flex-row justify-start">
            {data.socials.map((social: any) => (
              <a href={social.url} className="pl-2" key={`${social.url.split('.')[1]}-icon`}>
                <Image src={social.img} width={48} height={48} alt="" />
              </a>
            ))}
          </div>
        </div>
      </Wrap>
      <div className={'pt-12 m:pt-20 l:pt-4 xl:pt-0'}>
        <AttractGallery items={data.galleries} />

        <SubHeader
          className={'relative top-0 m:-top-8 l:-top-24 text-center mb-2'}
          text={'causing a racket // singing together'}
        />
        <Wrap className="l:hidden">
          <h2 className="text-xl font-bold pl-2 pb-4 l:-mt-[4rem] justify-self-center">
            March 2025: our{' '}
            <Link
              className="text-purple underline"
              href="https://www.crowdfunder.co.uk/p/fchoir2025"
              target="_blank"
            >
              Crowdfunder
            </Link>{' '}
            is live!
          </h2>
          <div className="py-4 font-bold text-xl mr-14 m:mr-4">
            <div className="flex flex-row justify-end">
              {data.socials.map((social: any) => (
                <a href={social.url} className="pl-2" key={`${social.url.split('.')[1]}-icon`}>
                  <Image src={social.img} width={32} height={32} alt="" />
                </a>
              ))}
            </div>
          </div>
        </Wrap>
      </div>
    </main>
  );
}
