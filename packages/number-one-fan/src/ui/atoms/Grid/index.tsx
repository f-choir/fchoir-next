import { PropsWithChildren } from 'react';
import Wrap from '@/ui/atoms/Wrap';
import classNames from 'classnames';

interface GridProps {}

const Grid = ({ children }: PropsWithChildren<GridProps>) => (
  <Wrap className={'flex flex-row justify-center'}>
    <div
      className={classNames(
        'grid grid-cols-1 m:grid-cols-2 l:grid-cols-3 gap-4 gap-y-4',
        'mt-8 m:mt-4 l:mt-2 mb-0 m:mb-8 l:mb-16',
      )}
    >
      {children}
    </div>
  </Wrap>
);

export default Grid;
