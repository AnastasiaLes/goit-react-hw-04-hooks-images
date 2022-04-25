import { useState } from 'react';
import {
  SearchbarStyles,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import 'react-toastify/dist/ReactToastify.css';

export function Searchbar({ onSubmit }) {
  const [searchImageTitle, setSearchImageTitle] = useState('');

  const handleSearchbarChange = event => {
    setSearchImageTitle(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchImageTitle.trim() === '') {
      return toast('Enter what you are looking for');
    }
    onSubmit(searchImageTitle);
    setSearchImageTitle('');
  };

  return (
    <SearchbarStyles>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          {' '}
          <ImSearch />
          <SearchFormButtonLabel> Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          value={searchImageTitle}
          onChange={handleSearchbarChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyles>
  );
}
