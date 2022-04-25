import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

export function Modal({ onClose, LargeImage, tag }) {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer>
        <img src={LargeImage} alt={tag} />
      </ModalContainer>
    </Overlay>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  LargeImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
