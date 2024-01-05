export interface EmbedProps {
  htmlString: string;
}

const Embed = ({ htmlString }: EmbedProps) => (
  <div dangerouslySetInnerHTML={{ __html: htmlString }} />
);

export default Embed;
