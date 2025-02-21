import Grid from '@/ui/atoms/Grid';
import ImagePreview from '@/ui/molecules/ImagePreview';
import { imageSrc } from '@/ui/helpers';
import { GalleryImageProps } from '@/ui/molecules/GalleryView';

interface ImageGridProps {
  path: string;
  images: GalleryImageProps[];
  onClickCallback: (() => void)[];
}

const ImageGrid = ({ path, images, onClickCallback }: ImageGridProps) => (
  <Grid>
    {images.map((image, idx) => (
      <ImagePreview
        key={idx}
        size={256}
        altText={image.alt || ''}
        src={imageSrc(path, image.uri)}
        onClickCallback={onClickCallback[idx]}
      />
    ))}
  </Grid>
);

export default ImageGrid;
