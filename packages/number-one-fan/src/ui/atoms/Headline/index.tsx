import Wrap from '@/ui/atoms/Wrap';

export interface HeadlineProps {
  text: string;
  wrapClasses?: string;
}

const Headline = ({ text, wrapClasses }: HeadlineProps) => (
  <Wrap className={wrapClasses ? wrapClasses : 'flex flex-row justify-center m:justify-end'}>
    <h1>
      <div className='text-black text-shadow font-medium text-5xl m:text-7xl l:text-9xl'>{text.toUpperCase()}</div>
    </h1>
  </Wrap>
);

export default Headline;
