interface SubHeaderProps {
  text: string;
  className?: string;
}
const SubHeader = ({ text, className }: SubHeaderProps) => (
  <h2
    className={`bg-purple text-red text-shadow inline-block text-2xl m:text-4xl l:text-6xl px-8 py-2 m-auto ${className}`}
  >
    {text.toUpperCase()}
  </h2>
);

export default SubHeader;
