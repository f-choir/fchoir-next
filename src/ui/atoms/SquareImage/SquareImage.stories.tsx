import type { Meta, StoryObj } from '@storybook/react';
import SquareImage from '.';

const meta: Meta<typeof SquareImage> = {
  component: SquareImage,
};

export default meta;

type Story = StoryObj<typeof SquareImage>;

export const Main: Story = {
  render: () => (
    <SquareImage src={'https://picsum.photos/id/10/300/200'} size={256} altText={'some alt text'} />
  ),
};
