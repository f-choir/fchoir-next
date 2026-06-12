import SubHeader from '@/ui/atoms/SubHeader';
import AttractGallery from '@/ui/molecules/AttractGallery/AttractGallery';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { home } from '@/api/staticRoutes';
import Image from 'next/image';
import Wrap from '@/ui/atoms/Wrap';
import { RichText, RichTextNode } from '@/ui/organisms/RichText';
import wordMarkSvg from "@/ui/atoms/Icon/svg/wordMarkSvg";
import MaskedImage from '@/ui/atoms/MaskedImage';
import letterMarkSvg from '@/ui/atoms/Icon/svg/letterMarkSvg';
import MaskedImageAttract from '@/ui/molecules/MaskedImageAttract';

const homePropsFromStrapi = (strapi: any) => {
  const galleries = strapi.data.attributes.galleries.data
    .map((gallery: any) => ({
      galleryId: gallery.id,
      galleryTitle: gallery.attributes.title,
      galleryDescription: gallery.attributes.short_description,
      imgUrl: gallery.attributes.hero_image.data?.attributes.img.data.attributes.url,
      imgAlt: gallery.attributes.hero_image.data?.attributes.img.data.attributes.alternativeText,
    }))
    .filter((gallery: any) => Boolean(gallery.imgUrl));

  const socials = strapi.data.attributes.socials.data.map((social: any) => {
    return { url: social.attributes.url, img: social.attributes.img.data.attributes.url };
  });

  return { galleries, socials, motd: strapi.data.attributes.motd };
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

  const Motd = () => (
    <div className="text-xl font-bold pl-2 pb-4 l:-mt-[4rem] xl:-mt-[2rem]">
      <RichText richText={data.motd} className={'text-center'} />
    </div>
  );

  return (
    <main className="pt-10 m:pt-8">
        {/*<div className={'max-w-xl m:max-w-2xl l:max-w-3xl xl:max-w-4xl m-auto -mt-2 pb-8 xl:pb-20'}>*/}
        <div className={'max-w-[100vw] m-auto py-2 xl:pb-10'}>
          <MaskedImageAttract
            imageUrls={data.galleries.map((item: any) => item.imgUrl)}
            dwellTime={5}
            path={letterMarkSvg}
          />
        </div>
      {/*<div className="absolute z-20 top-8 m:top-20 l:top-32 xl:top-36 left-8 l:left-1/2 min-w-[20rem] l:min-w-[28rem] xl:min-w-[40rem] xl:fill-blue">*/}
      {/*  {wordMarkSvg}*/}
      {/*</div>*/}

      <Wrap className="hidden l:inline-block">
        {/*<div className="font-bold ml-[10rem] xl:ml-[18rem] mt-[4rem] xl:mt-[2rem] xl:mb-[1rem]">*/}
          {/*<Motd />*/}
          {/*<div className="flex flex-row justify-start">*/}
          {/*  {data.socials.map((social: any) => (*/}
          {/*    <a href={social.url} className="pl-2" key={`${social.url.split('.')[1]}-icon`}>*/}
          {/*      <Image src={social.img} width={48} height={48} alt="" />*/}
          {/*    </a>*/}
          {/*  ))}*/}
          {/*</div>*/}
        {/*</div>*/}
      </Wrap>
      <div className={'pt-14 m:pt-20 l:pt-4 xl:pt-0'}>
        {/*<AttractGallery items={data.galleries} />*/}
        <SubHeader
          className={'relative top-0 m:-top-4 text-center mb-2'}
          text={'causing a racket // singing together'}
        />
        {/*<Wrap className="l:hidden">*/}
        {/*  <Motd />*/}
        {/*  <div className="py-4 font-bold text-xl mr-14 m:mr-4">*/}
        {/*    <div className="flex flex-row justify-end">*/}
        {/*      {data.socials.map((social: any) => (*/}
        {/*        <a href={social.url} className="pl-2" key={`${social.url.split('.')[1]}-icon`}>*/}
        {/*          <Image src={social.img} width={32} height={32} alt="" />*/}
        {/*        </a>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Wrap>*/}
      </div>
    </main>
  );
}
