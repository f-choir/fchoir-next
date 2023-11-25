import type { Meta, StoryObj } from '@storybook/react';
import GalleryView from '.';

const meta: Meta<typeof GalleryView> = {
  component: GalleryView,
};

export default meta;

type Story = StoryObj<typeof GalleryView>;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/11/300/200',
  'https://picsum.photos/id/12/300/200',
];
export const Main: Story = {
  render: () => <GalleryView images={images} />,
};
