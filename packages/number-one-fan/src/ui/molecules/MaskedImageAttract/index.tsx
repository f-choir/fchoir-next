'use client'

import MaskedImage from '@/ui/atoms/MaskedImage';
import { useEffect, useState } from 'react';

interface MaskedImageAttractProps {
  imageUrls: string[];
  dwellTime: number;
  path: string;
}
const MaskedImageAttract = ({ imageUrls, path }: MaskedImageAttractProps) => {
  const [imageUrl, setImageUrl] = useState<string>(imageUrls[0]);

  useEffect(() => {
    const imageIdx = Math.floor((Math.random() * imageUrls.length));
    setImageUrl(imageUrls[imageIdx]);
  }, [imageUrls]);

  return <MaskedImage imageUrl={imageUrl} path={path} className={'m-auto max-h-[72vh]'} />;
};

export default MaskedImageAttract;