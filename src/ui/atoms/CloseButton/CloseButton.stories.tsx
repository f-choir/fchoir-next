import type { Meta, StoryObj } from '@storybook/react';
import CloseButton from '.';

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Main: Story = {
  render: () => (
    <div className={'absolute bg-black'}>
      <CloseButton onClose={() => {}} />
    </div>
  ),
};
