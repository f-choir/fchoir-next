import Wrap from '@/ui/atoms/Wrap';
import classNames from 'classnames';

interface SubHeaderProps {
  text: string;
  className?: string;
  inverted?: boolean;
}
const SubHeader = ({ text, className, inverted }: SubHeaderProps) => (
  <Wrap className={'text-center'}>
    <h2
      className={classNames(
        'inline-block',
        ' rounded-2xl m-auto px-8 py-2',
        inverted ? 'text-black bg-white' : 'text-white bg-black',
        'font-bastardoSemibold',
        'text-xl m:text-2xl l:text-4xl',
        'tracking-widest',
        className,
      )}
    >
      {text.toUpperCase()}
    </h2>
  </Wrap>
);

export default SubHeader;
