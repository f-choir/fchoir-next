import type { Meta, StoryObj } from '@storybook/react';
import Headline from '.';

const meta: Meta<typeof Headline> = {
  component: Headline,
};

export default meta;

type Story = StoryObj<typeof Headline>;

export const Main: Story = {
  render: () => <Headline text={'Headline Text'}/>,
};
