import type { Meta, StoryObj } from '@storybook/react';
import SubHeader from '.';

const meta: Meta<typeof SubHeader> = {
  component: SubHeader,
};

export default meta;

type Story = StoryObj<typeof SubHeader>;

export const Main: Story = {
  render: () => <SubHeader text={'SubHeader Text'} />,
};
