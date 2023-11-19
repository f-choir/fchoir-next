
export interface HeadlineProps {
  text: string;
}

const Headline = ({text}: HeadlineProps) => <h1 className='text-shadow text-red font-medium text-5xl m:text-7xl l:text-9xl'>{text.toUpperCase()}</h1>;

export default Headline;
