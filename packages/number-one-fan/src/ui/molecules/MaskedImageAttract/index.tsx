import MaskedImage from '@/ui/atoms/MaskedImage';

interface MaskedImageAttractProps {
  imageUrls: string[];
  dwellTime: number;
  path: string;
}
const MaskedImageAttract = ({ imageUrls, dwellTime, path }: MaskedImageAttractProps) => (
  <MaskedImage
    imageUrl={imageUrls[3]}
    path={path}
    className={'m-auto'}
  />
);

export default MaskedImageAttract;