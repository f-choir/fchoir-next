import Wrap from '@/ui/atoms/Wrap';
import classNames from 'classnames';

interface SubHeaderProps {
  text: string;
  className?: string;
}
const SubHeader = ({ text, className }: SubHeaderProps) => (
  <Wrap className={'text-center'}>
    <h2
      className={classNames(
        'inline-block bg-black m-auto px-8 py-2',
        'text-green text-shadow',
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
