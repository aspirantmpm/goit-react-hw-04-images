import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Globalstyle';
// import React, { Component } from 'react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
// import { Formik } from 'formik';
// import PropTypes from 'prop-types';


export const Searchbar = ({ onSubmit }) => {
  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  const [searchInput, setSearchInput] = useState('');

  // state = {
  //   searchInput: '',
  // };

  const handleChange = e => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!searchInput.trim()) {
      return toast.error('Please enter search text');
    }

    onSubmit(searchInput);
    setSearchInput('');
  };

  // render() {
  return (
    <Header>
      {/* <form> */}
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="images"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchInput}
        />
      </SearchForm>
      {/* </form> */}
    </Header>
  );
  // }
};
