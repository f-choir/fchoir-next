import Grid from '@/ui/atoms/Grid';
import ImagePreview from '@/ui/molecules/ImagePreview';
import { imageSrc } from '@/ui/helpers';

interface ImageGridProps {
  path: string;
  images: string[];
  onClickCallback: (() => void)[];
}

const ImageGrid = ({ path, images, onClickCallback }: ImageGridProps) => (
  <Grid>
    {images.map((image, idx) => (
      <ImagePreview
        key={idx}
        size={256}
        altText={'foo'}
        src={imageSrc(path, image)}
        onClickCallback={onClickCallback[idx]}
      />
    ))}
  </Grid>
);

export default ImageGrid;
