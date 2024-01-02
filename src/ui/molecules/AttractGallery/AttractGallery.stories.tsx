import type { Meta, StoryObj } from '@storybook/react';
import AttractGallery from '@/ui/molecules/AttractGallery/AttractGallery';

const meta: Meta<typeof AttractGallery> = {
  component: AttractGallery,
};

export default meta;

type Story = StoryObj<typeof AttractGallery>;

export const Main: Story = {
  render: () => <AttractGallery />,
};
