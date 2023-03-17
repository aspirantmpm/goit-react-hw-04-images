import { ImageGalleryList } from './Globalstyle';
import { ImageGalleryItem } from './ImageGalleryItem';
import PropTypes from 'prop-types';


export function ImageGallery({images, openModal}) { 
    return (
      <ImageGalleryList>
       {images.map((image, idx) => (
          <ImageGalleryItem key={idx} image={image} openModal={openModal} />
        ))}
      </ImageGalleryList>
    );
  }

  ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
  };
