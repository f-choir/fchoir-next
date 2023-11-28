import Grid from '@/ui/atoms/Grid';
import ImagePreview from '@/ui/molecules/ImagePreview';

interface ImageGridProps {
  images: string[];
  onClickCallback: (() => void)[];
}

const ImageGrid = ({ images, onClickCallback }: ImageGridProps) => (
  <Grid>
    {images.map((image, idx) => (
      <ImagePreview
        key={idx}
        size={256}
        altText={'foo'}
        src={image}
        onClickCallback={onClickCallback[idx]}
      />
    ))}
  </Grid>
);

export default ImageGrid;
