'use client';
import Wrap from '@/ui/atoms/Wrap';
import { useLayoutEffect, useRef } from 'react';

export interface EmbedProps {
  htmlString: string;
  isCentered?: boolean;
}

const Embed = ({ htmlString, isCentered }: EmbedProps) => {
  const elRef = useRef(null);

  useLayoutEffect(() => {
    if (elRef.current && isCentered) {
      // @ts-ignore
      elRef.current.firstElementChild.style.display = 'block';
      // @ts-ignore
      elRef.current.firstElementChild.style.margin = 'auto';
    }
  });
  const embed = <div ref={elRef} dangerouslySetInnerHTML={{ __html: htmlString }} />;

  return <Wrap>{embed}</Wrap>;
};

export default Embed;
