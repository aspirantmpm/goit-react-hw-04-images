import { Overlay, ModalDiv } from './Globalstyle';
import React, { useEffect } from 'react';

export const Modal = ({ imageUrl, onClose, imageTags }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalDiv>
        <img src={imageUrl} alt={imageTags} />
      </ModalDiv>
    </Overlay>
  );
};
