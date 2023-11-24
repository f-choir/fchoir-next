import { PropsWithChildren } from 'react';
import Wrap from '@/ui/atoms/Wrap';

interface GridProps {}

const Grid = ({ children }: PropsWithChildren<GridProps>) => (
  <Wrap className={''}>
    <div className={'grid grid-cols-2 m:grid-cols-3 gap-4'}>{children}</div>
  </Wrap>
);

export default Grid;
