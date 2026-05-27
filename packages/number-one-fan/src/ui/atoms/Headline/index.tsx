import classNames from 'classnames';
import Wrap from '@/ui/atoms/Wrap';

export interface HeadlineProps {
  text: string;
  wrapClasses?: string;
}

const Headline = ({ text, wrapClasses }: HeadlineProps) => (
  <Wrap className={wrapClasses ? wrapClasses : 'flex flex-row justify-start m:justify-end'}>
    <h1
      className={classNames(
        'text-shadow text-pink font-medium px-5 m:px-0 text-5xl m:text-7xl l:text-9xl',
      )}
    >
      {text.toUpperCase()}
    </h1>
  </Wrap>
);

export default Headline;
