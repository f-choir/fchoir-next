import type { Meta, StoryObj } from '@storybook/react';
import GridGallery from '.';

const meta: Meta<typeof GridGallery> = {
  component: GridGallery,
};

export default meta;

type Story = StoryObj<typeof GridGallery>;

const galleries: string[] = Array(9).fill('https://picsum.photos/id/10/300/200');

export const Main: Story = {
  render: () => <GridGallery galleries={galleries} />,
};
