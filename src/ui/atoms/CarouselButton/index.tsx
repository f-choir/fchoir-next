import Icon from '@/ui/atoms/Icon';
import ChevronRight from '@/ui/atoms/Icon/paths/chevronRight';
import classNames from 'classnames';

interface CarouselButtonProps {
  scrollFn: () => void;
  viewIdx: number;
  isAtEnd: (idx: number) => boolean;
  isRight: boolean;
}

const CarouselButton = ({ scrollFn, isRight, viewIdx, isAtEnd }: CarouselButtonProps) => (
  <button onClick={scrollFn}>
    <Icon
      path={ChevronRight.path}
      className={classNames(
        'bg-lilac opacity-60 p-1.5 m-auto',
        !isRight && 'rotate-180',
        isAtEnd(viewIdx) ? 'fill-dove' : 'fill-black hover:p-1 hover:fill-red hover:opacity-100',
      )}
      size={'32px'}
    />
  </button>
);

export default CarouselButton;
