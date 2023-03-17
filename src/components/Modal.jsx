// import * as basicLightbox from 'basiclightbox';
import { Overlay, ModalDiv } from './Globalstyle';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    imgUrl: PropTypes.string,
    imageTags: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalDiv>
          <img src={this.props.imageUrl} alt={this.props.imageTags} />
        </ModalDiv>
      </Overlay>
    );
  }
};
