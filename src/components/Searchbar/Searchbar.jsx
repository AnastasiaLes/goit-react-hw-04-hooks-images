import React from 'react';
import {SearchbarStyles, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';
import { toast } from 'react-toastify';
import { ImSearch } from "react-icons/im";
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends React.Component {
  state = {
    imageList: [],
    searchImageTitle: '',
    page: 1
  };

  handleSearchbarChange = (event) => {
    this.setState({
      searchImageTitle: event.currentTarget.value.toLowerCase()
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchImageTitle.trim() === '') {
      return toast("Enter what you are looking for");
    }
    this.props.onSubmit(this.state.searchImageTitle );
    this.setState({searchImageTitle: ''})
  }

  render() {
    return (
    <SearchbarStyles>
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchFormButton type="submit"> <ImSearch />    
        <SearchFormButtonLabel>  Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          value={this.state.searchImageTitle}
          onChange={this.handleSearchbarChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyles>
    );
  }
}