// import * as basicLightbox from 'basiclightbox';
import { Overlay, ModalDiv } from './Globalstyle';
// import PropTypes from 'prop-types';
// import { Component } from 'react';
import React, { useEffect } from 'react';

export const Modal = ({ imageUrl, onClose, imageTags }) => {
  // static propTypes = {
  //   onClose: PropTypes.func.isRequired,
  //   imgUrl: PropTypes.string,
  //   imageTags: PropTypes.string,
  // };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  // const componentWillUnmount = () => {
  //   window.removeEventListener('keydown', handleKeyDown);
  // };

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

  // render() {
  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalDiv>
        <img src={imageUrl} alt={imageTags} />
      </ModalDiv>
    </Overlay>
  );
  // }
};
