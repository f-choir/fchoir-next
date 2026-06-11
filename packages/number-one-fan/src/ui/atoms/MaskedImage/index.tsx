
interface MaskedImageProps {
  imageUrl: string;
  path: string;
  className?: string;
}

const MaskedImage = ({imageUrl, path, className}: MaskedImageProps) => {
  return (
    <>
      <svg
        viewBox={'0 0 829.1579360962 576.7244873047'}
        className={className || ''}
      >
        <clipPath id="imageMask">
          <path d={path} />
        </clipPath>
        <g>
          <image
            href={imageUrl}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            opacity={0.1}
          />
          <image
            href={imageUrl}
            x="-34%"
            y="-34%"
            width="160%"
            height="160%"
            clipPath="url(#imageMask)"
          />
        </g>
      </svg>
    </>
  );
};

export default MaskedImage;