import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FetchQuery } from 'Services/API';
import { MovieSearchWrap } from './MovieSearch.styled';

export function MoviesSearch() {
  const [query, setQuery] = useState('');
  const [inputCange, setInputChange] = useState('');
  const [results, setResults] = useState([]);

  const onInputChange = event => {
    setInputChange(event.currentTarget.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setQuery(inputCange);
    // form.reset()
    // console.log(query);
  };

  useEffect(() => {
    query && FetchQuery(query).then(data => setResults(data.results));
  }, [query]);

  return (
    <MovieSearchWrap>
      <form onSubmit={onSubmit}>
        <input type="input" onInput={onInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>
        {query.length === 0 && <p>Enter what you are looking</p>}
        {results.length > 0 &&
          results.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        {results.length === 0 && query.length !== 0 && (
          <h2>Nothing was found</h2>
        )}
      </div>

      {/* <h2> Movies</h2> */}
      {/* <Route>

            </Route> */}
      <Outlet />
    </MovieSearchWrap>
  );
}
