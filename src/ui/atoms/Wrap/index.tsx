import { PropsWithChildren } from 'react';

interface WrapProps {
  className?: string;
}
const Wrap = ({ children, className }: PropsWithChildren<WrapProps>) => {
  return <div className={`w-full m:w-3/4 xl:w-[1024px] ${className}`}>{children}</div>;
};
export default Wrap;
