import type { Meta, StoryObj } from '@storybook/react';
import GalleryGrid from '.';

const meta: Meta<typeof GalleryGrid> = {
  component: GalleryGrid,
};

export default meta;

type Story = StoryObj<typeof GalleryGrid>;

const galleries: string[] = Array(9).fill('https://picsum.photos/id/10/300/200');

export const Main: Story = {
  render: () => <GalleryGrid galleries={galleries} />,
};
