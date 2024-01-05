import Wrap from '@/ui/atoms/Wrap';

export interface EmbedProps {
  htmlString: string;
}

const Embed = ({ htmlString }: EmbedProps) => (
  <Wrap className={'m-auto'}>
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  </Wrap>
);

export default Embed;
