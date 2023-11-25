import type { Meta, StoryObj } from '@storybook/react';
import ImageGrid from '.';

const meta: Meta<typeof ImageGrid> = {
  component: ImageGrid,
};

export default meta;

type Story = StoryObj<typeof ImageGrid>;

const images = Array(9).fill('https://picsum.photos/id/10/300/200');

export const Main: Story = {
  render: () => <ImageGrid images={images} />,
};
