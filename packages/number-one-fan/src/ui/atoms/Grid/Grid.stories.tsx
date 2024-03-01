import type { Meta, StoryObj } from '@storybook/react';
import Grid from '.';
import SquareImage from '@/ui/atoms/SquareImage';

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Main: Story = {
  render: () => (
    <div className={'justify-items-center'}>
      <Grid>
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
        <SquareImage
          src={'https://picsum.photos/id/10/300/200'}
          size={256}
          altText={'some alt text'}
        />
      </Grid>
    </div>
  ),
};
