import type { Meta, StoryObj } from '@storybook/react';
import ImagePreview from '.';

const meta: Meta<typeof ImagePreview> = {
  component: ImagePreview,
};

export default meta;

type Story = StoryObj<typeof ImagePreview>;

export const Main: Story = {
  render: () => (
    <ImagePreview
      size={256}
      altText={'some alt text'}
      src={'https://picsum.photos/id/10/300/200'}
    />
  ),
};
