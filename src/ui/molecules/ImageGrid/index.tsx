import Grid from '@/ui/atoms/Grid';
import ImagePreview from '@/ui/molecules/ImagePreview';

interface ImageGridProps {
  images: string[];
}
const ImageGrid = ({ images }: ImageGridProps) => (
  <Grid>
    {images.map((image, idx) => (
      <ImagePreview key={idx} size={256} altText={'foo'} src={image} />
    ))}
  </Grid>
);

export default ImageGrid;
