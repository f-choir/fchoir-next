
interface MaskedImageProps {
  imageUrl: string;
  path: string;
  className?: string;
}

const MaskedImage = ({imageUrl, path, className}: MaskedImageProps) => {
  return (
    <svg
      viewBox={'0 0 829.1579360962 576.7244873047'}
      className={`w-11/12 h-11/12 ${className || ''}`}
    >
      <clipPath id="imageMask">
        <path d={path} />
      </clipPath>
      <image href={imageUrl} x="-34%" y="-34%" width="160%" height="160%" clipPath="url(#imageMask)" />
    </svg>
  );}

export default MaskedImage;