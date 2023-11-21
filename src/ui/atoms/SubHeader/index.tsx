interface SubHeaderProps {
  text: string;
}
const SubHeader = ({ text }: SubHeaderProps) => (
  <h2 className={'bg-purple text-red text-shadow inline-block text-2xl m:text-4xl l:text-6xl p-2'}>
    {text.toUpperCase()}
  </h2>
);

export default SubHeader;
