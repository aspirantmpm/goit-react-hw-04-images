// import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import fetchImages from './fetch';
import { GlobalStyle } from './Globalstyle';
import { Searchbar } from './Searchbar';
import { Loader } from './Loader';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Modal } from './Modal';

export const App = () => {
  const[searchInput, setSearchInput] = useState('');
  const[page, setPage] = useState(1);
  const[isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState(null);
  // const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(0);
  const [imagesOnPage, setImagesOnPage] = useState(0);
  const [showModal, setShowModal] = useState('');
  const [currentLargeImageUrl, setCurrentLargeImageUrl] = useState('');
  const [currentImageTags, setCurrentImageTags] = useState('');
  // state = {
  //   searchInput: '',
  //   page: 1,
  //   isLoading: false,
  //   images: null,
  //   error: null,
  //   totalHits: 0,
  //   imagesOnPage: 0,
  //   showModal: false,
  //   currentLargeImageUrl: '',
  //   currentImageTags: '',
  // };

  useEffect(() => {
    if (searchInput !== '') {
      setIsLoading(true);

      fetchImages(searchInput, page)
        .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            setImages(null);
            setTotalHits(0);
            return Promise.reject(
              toast.error(`There is no image with name ${searchInput}`)
            );
          }

          const arrayOfImages = createArrayOfImages(hits);

          setTotalHits(totalHits);
          setImagesOnPage(hits.length);

          return arrayOfImages;
        })
        .then(arrayOfImages => {
          if (page === 1) {
            setImages(arrayOfImages);
            window.scrollTo({
              top: 0,
            });
            return;
          }
          setImages(prevImages => [...prevImages, ...arrayOfImages]);
        })

        .catch(error => {
          console.log(`${error.message}`);
        })

        .finally(() => turnOffLoader());
    }
  }, [page, searchInput]);

  const createArrayOfImages = data => {
    const arrayOfImages = data.map(element => ({
      tags: element.tags,
      webformatURL: element.webformatURL,
      largeImageURL: element.largeImageURL,
    }));
    return arrayOfImages;
  };

  const turnOffLoader = () => {
    return setIsLoading( false );
  };

  const formSubmitHandler = data => {
    setSearchInput(data);
    setPage(1)
  };

  const nextFetch = () => {
    setPage(prevState => prevState + 1 );
    ;
  };

  const openModal = event => {
    const currentLargeImageUrl = event.target.dataset.large;
    const currentImageTags = event.target.alt;
    setCurrentLargeImageUrl(currentLargeImageUrl);
    setCurrentImageTags(currentImageTags);

    // this.setState({ currentLargeImageUrl, currentImageTags });
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal( showModal  =>  !showModal,
    );
  };

  // render() {
    // const {
    //   images,
    //   isLoading,
    //   showModal,
    //   currentLargeImageUrl,
    //   currentImageTags,
    //   imagesOnPage,
    // } = this.state;

    return (
      <div>
        <GlobalStyle />
        <Toaster
          position="top-left"
          toastOptions={{
            duration: 2000,
          }}
        />
        <Searchbar onSubmit={formSubmitHandler} />
        {images && <ImageGallery images={images} openModal={openModal} />}

        {isLoading && <Loader />}

        {imagesOnPage > 0 &&
          page < Math.ceil(totalHits / 12) && (
            <Button onClick={nextFetch} />
          )}

        {showModal && (
          <Modal
            imageUrl={currentLargeImageUrl}
            imageTags={currentImageTags}
            onClose={toggleModal}
          />
        )}
      </div>
    );
  // }
}
