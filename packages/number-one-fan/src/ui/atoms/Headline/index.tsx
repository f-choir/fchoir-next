import Wrap from '@/ui/atoms/Wrap';

export interface HeadlineProps {
  text: string;
  wrapClasses?: string;
  textClasses?: string;
}

const Headline = ({ text, wrapClasses, textClasses = 'text-black' }: HeadlineProps) => (
  <Wrap className={wrapClasses ? wrapClasses : 'flex flex-row justify-center m:justify-end'}>
    <h1>
      <div className={`${textClasses} font-seaSummer font-medium text-5xl m:text-8xl l:text-9xl`}>
        {text.toUpperCase()}
      </div>
    </h1>
  </Wrap>
);

export default Headline;
