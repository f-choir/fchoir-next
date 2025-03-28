import Grid from '@/ui/atoms/Grid';
import GalleryPreview, { GalleryPreviewProps } from '@/ui/molecules/GalleryPreview';
import { imageSrc } from '@/ui/helpers';

interface GalleryGridProps {
  galleries: GalleryPreviewProps[];
}

const GalleryGrid = ({ galleries }: GalleryGridProps) => {
  return (
    <Grid>
      {galleries.map((gallery, idx) => (
        <GalleryPreview
          key={idx}
          size={256}
          titleText={gallery.titleText}
          imgSrc={imageSrc(gallery.uri, gallery.imgSrc)}
          uri={`/gallery/${gallery.uri}`}
        />
      ))}
    </Grid>
  );
};

export default GalleryGrid;
