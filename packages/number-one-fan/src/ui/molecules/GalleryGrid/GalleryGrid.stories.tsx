import type { Meta, StoryObj } from '@storybook/react';
import GalleryGrid from '.';
import { GalleryPreviewProps } from '@/ui/molecules/GalleryPreview';

const meta: Meta<typeof GalleryGrid> = {
  component: GalleryGrid,
};

export default meta;

type Story = StoryObj<typeof GalleryGrid>;

const galleryPreviewProps: GalleryPreviewProps = {
  titleText: 'test gallery',
  uri: 'someUri',
  imgSrc: 'https://picsum.photos/id/10/300/200',
  size: 256,
};

const galleries: GalleryPreviewProps[] = Array(9).fill(galleryPreviewProps);

export const Main: Story = {
  render: () => <GalleryGrid galleries={galleries} />,
};
