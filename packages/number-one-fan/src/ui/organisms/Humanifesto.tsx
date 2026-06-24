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
        return 'l:text-center';
      case 0:
        return 'l:text-center';
      case 1:
        return 'l:text-center';
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
            'text-white font-medium',
            'py-2 l:py-4',
            'text-center l:text-left',
            'font-bastardoSemi'
          )}
        >
          {words[0]}
        </p>
      }
      {words.slice(1).map((fragment, idx) => (
        <p
          key={`humanifesto-${idx}`}
          className={classNames(
            'm:text-xl l:text-2xl xl:text-3xl',
            // idx % 3 === 0 && 'my-1 l:my-2 xl:my-4',
            'mt-1',
            idx % 4 === 0 && 'mt-3 l:mt-5 xl:mt-8',
            'leading-5 m:leading-5 l:leading-7 xl:leading-9',
            'text-white',
            'text-center',
            'font-bastardoSemi',
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
