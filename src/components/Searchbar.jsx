import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Globalstyle';
import React, { Component } from 'react';
import { toast } from 'react-hot-toast';
// import { Formik } from 'formik';
import PropTypes from 'prop-types';


export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchInput: '',
  };

  handleChange = e => {
    this.setState({ searchInput: e.target.value.toLowerCase() });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (!this.state.searchInput.trim()) {
      return toast.error('Please enter search text');
    }

    this.props.onSubmit(this.state.searchInput);
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <Header>
        {/* <form> */}
        <SearchForm onSubmit={this.handleFormSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="images"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
        </SearchForm>
        {/* </form> */}
      </Header>
    );
  }
}
