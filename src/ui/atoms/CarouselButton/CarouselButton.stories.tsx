import type { Meta, StoryObj } from '@storybook/react';
import CarouselButton from '.';

const meta: Meta<typeof CarouselButton> = {
  component: CarouselButton,
};

export default meta;

type Story = StoryObj<typeof CarouselButton>;

export const Left: Story = {
  render: () => (
    <CarouselButton scrollFn={() => {}} viewIdx={0} isAtEnd={(idx) => false} isRight={false} />
  ),
};

export const Right: Story = {
  render: () => (
    <CarouselButton scrollFn={() => {}} viewIdx={0} isAtEnd={(idx) => false} isRight={true} />
  ),
};
