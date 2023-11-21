import classNames from 'classnames';
import Wrap from '@/ui/atoms/Wrap';

export interface HeadlineProps {
  text: string;
  wrapClasses?: string;
}

const Headline = ({ text, wrapClasses }: HeadlineProps) => (
  <Wrap className={wrapClasses ? wrapClasses : 'flex flex-row justify-end'}>
    <h1
      className={classNames(
        'text-shadow text-red font-medium pr-5 m:pr-0 text-5xl m:text-7xl l:text-9xl',
      )}
    >
      {text.toUpperCase()}
    </h1>
  </Wrap>
);

export default Headline;
