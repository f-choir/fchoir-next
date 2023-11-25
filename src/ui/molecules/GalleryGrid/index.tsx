import Grid from '@/ui/atoms/Grid';
import GalleryPreview from '@/ui/molecules/GalleryPreview';

interface GalleryGridProps {
  galleries: string[];
}

const GalleryGrid = ({ galleries }: GalleryGridProps) => {
  return (
    <Grid>
      {galleries.map((gallery, idx) => (
        <GalleryPreview
          key={idx}
          size={256}
          titleText={'foo'}
          imgSrc={gallery}
          galleryHref={'foo'}
        />
      ))}
    </Grid>
  );
};

export default GalleryGrid;
