'use client';
import { useLayoutEffect, useRef } from 'react';

export interface EmbedProps {
  htmlString: string;
  isCentered?: boolean;
  className?: string;
}

const Embed = ({ htmlString, isCentered, className }: EmbedProps) => {
  const elRef = useRef(null);

  useLayoutEffect(() => {
    if (elRef.current && isCentered) {
      // @ts-ignore
      elRef.current.firstElementChild.style.display = 'block';
      // @ts-ignore
      elRef.current.firstElementChild.style.margin = 'auto';
    }
  });
  return (
    <div className={className || ''} ref={elRef} dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};

export default Embed;
