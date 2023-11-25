import Grid from '@/ui/atoms/Grid';
import GalleryPreview from '@/ui/molecules/GalleryPreview';

interface GridGalleryProps {
  galleries: string[];
}

const GridGallery = ({ galleries }: GridGalleryProps) => {
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

export default GridGallery;
