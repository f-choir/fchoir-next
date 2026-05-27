import classNames from 'classnames';
import Wrap from '@/ui/atoms/Wrap';
import wordMarkSvg from "@/ui/atoms/Icon/svg/wordMarkSvg";

export interface HeadlineProps {
  text: string;
  wrapClasses?: string;
  // isWordMark: boolean;
}

const Headline = ({ text, wrapClasses }: HeadlineProps) => (
  <Wrap className={wrapClasses ? wrapClasses : 'flex flex-row justify-center m:justify-end'}>
    <h1>

           {/*<div className='min-w-xl max-w-xl p-2 fill-blue overflow-visible'>{wordMarkSvg}</div>*/}
         <div className='text-black text-shadow font-medium text-5xl m:text-7xl l:text-9xl'>{text.toUpperCase()}</div>
      </h1>
  </Wrap>
);

export default Headline;
