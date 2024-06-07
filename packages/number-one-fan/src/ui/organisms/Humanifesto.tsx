import classNames from 'classnames';

interface HumanifestoProps {
  words: string[];
}
const Humanifesto = ({ words }: HumanifestoProps) => {
  // -1: left. 0: centre. 1: right.
  const aligns = [-1, 1, -1, 1, 0, -1, 1, 0, -1, 1, 0];

  const getAlignClass = (value: number) => {
    switch (value) {
      case -1:
        return 'l:text-left';
      case 0:
        return 'l:text-center';
      case 1:
        return 'l:text-right';
      default:
        return '';
    }
  };

  return (
    <div className="my-4 w-[95%] m:w-full m-auto flex flex-col">
      {
        <p
          className={classNames(
            'text-3xl m:text-4xl l:text-5xl xl:text-7xl',
            'text-red font-medium',
            'my-1 l:my-2 ',
            'text-center l:text-left',
          )}
        >
          {words[0]}
        </p>
      }
      {words.slice(1).map((fragment, idx) => (
        <p
          key={`humanifesto-${idx}`}
          className={classNames(
            'm:text-lg l:text-2xl xl:text-3xl',
            'my-1 l:my-2 xl:my-4',
            'leading-5 m:leading-5 l:leading-7 xl:leading-9',
            'text-purple',
            'text-center',
            getAlignClass(aligns[idx]),
          )}
        >
          {fragment}
        </p>
      ))}
    </div>
  );
};

export default Humanifesto;
