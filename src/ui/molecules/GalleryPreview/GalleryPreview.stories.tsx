import type { Meta, StoryObj } from '@storybook/react';
import GalleryPreview from '.';
import Wrap from '@/ui/atoms/Wrap';

const meta: Meta<typeof GalleryPreview> = {
  component: GalleryPreview,
};

export default meta;

type Story = StoryObj<typeof GalleryPreview>;

export const Main: Story = {
  render: () => (
    <Wrap>
      <GalleryPreview
        size={256}
        galleryHref={'foo'}
        imgSrc={'https://picsum.photos/id/10/300/200'}
        titleText={'some exciting title text'}
      />
    </Wrap>
  ),
};
