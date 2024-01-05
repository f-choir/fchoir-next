import type { Meta, StoryObj } from '@storybook/react';
import Embed, { EmbedProps } from '@/ui/atoms/Embed/Embed';

const meta: Meta<typeof Embed> = {
  component: Embed,
};

export default meta;

type Story = StoryObj<typeof Embed>;

const props: EmbedProps = {
  htmlString:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=INGiHrL63avQtahV&amp;start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
};

export const Main: Story = {
  render: () => <Embed {...props} />,
};
