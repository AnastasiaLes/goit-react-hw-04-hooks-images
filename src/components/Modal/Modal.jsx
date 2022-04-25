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
