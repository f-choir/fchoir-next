import type { Meta, StoryObj } from '@storybook/react';
import HorizontalDivider from '.';

const meta: Meta<typeof HorizontalDivider> = {
  component: HorizontalDivider,
};

export default meta;

type Story = StoryObj<typeof HorizontalDivider>;

export const Main: Story = {
  render: () => <HorizontalDivider />,
};
