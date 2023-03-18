import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Globalstyle';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export const Searchbar = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

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

  return (
    <Header>
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
    </Header>
  );
};
