import type { Meta, StoryObj } from '@storybook/react';
import Icon from '.';
import chevronRight from './paths/chevronRight';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Chevron: Story = {
  render: () => <div className={'p-2'}><Icon size="32px" {...chevronRight} className={'fill-pink bg-black p-2'} /></div>,
};
