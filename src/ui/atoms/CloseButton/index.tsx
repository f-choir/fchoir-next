import Icon from '@/ui/atoms/Icon';
import Cross from '@/ui/atoms/Icon/paths/cross';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton = ({ onClose }: CloseButtonProps) => (
  <button onClick={onClose}>
    <div className={'absolute top-0 right-0 p-4'}>
      <Icon
        path={Cross.path}
        className={'fill-white p-1 hover:fill-red transition-fill duration-300'}
        size={'48px'}
      />
    </div>
  </button>
);

export default CloseButton;
