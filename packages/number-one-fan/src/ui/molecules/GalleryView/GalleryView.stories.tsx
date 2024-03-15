import type { Meta, StoryObj } from '@storybook/react';
import GalleryView, { GalleryImageProps } from '.';

const meta: Meta<typeof GalleryView> = {
  component: GalleryView,
};

export default meta;

type Story = StoryObj<typeof GalleryView>;

const images: GalleryImageProps[] = [
  { uri: 'https://picsum.photos/id/10/300/200', alt: '' },
  { uri: 'https://picsum.photos/id/11/300/200', alt: '' },
  { uri: 'https://picsum.photos/id/12/300/200', alt: '' },
];
export const Main: Story = {
  render: () => (
    <GalleryView
      galleryId={'foo'}
      images={images}
      closeViewCallback={() => {}}
      updateViewIdxCallback={() => {}}
      viewIdx={0}
    />
  ),
};
