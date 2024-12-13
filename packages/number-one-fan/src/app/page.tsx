import Headline from '@/ui/atoms/Headline';
import SubHeader from '@/ui/atoms/SubHeader';
import AttractGallery from '@/ui/molecules/AttractGallery/AttractGallery';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { home } from '@/api/staticRoutes';
import Image from 'next/image';
import Wrap from '@/ui/atoms/Wrap';

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
      <div className={'absolute top-24 m:top-28 left-1/5 m:left-4/5 l:left-1/3 xl:left-1/2'}>
        <Headline text={'f*choir'} wrapClasses={'relative z-20'} />
      </div>
      <div className={'pt-20'}>
        <AttractGallery items={data.galleries} />

        <SubHeader
          className={'relative top-0 m:-top-8 l:-top-24 text-center mb-2'}
          text={'causing a racket // singing together'}
        />
        <Wrap>
          <div className="py-4 font-bold text-xl mr-14">
            <div className="flex flex-row justify-end">
              {/*<div>Find us elsewhere:</div>*/}
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
