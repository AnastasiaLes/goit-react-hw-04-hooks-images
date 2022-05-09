const API_KEY = '92e9d2ddc265e58dd6d39fa8f044cca9';
const BASE_URL = 'https://api.themoviedb.org/3';

export function Fetch() {
  const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something weent wrong!`));
  });
}

export function FetchMovie(movieId) {
  const URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something weent wrong!`));
  });
}

export function FetchCast(movieId) {
  const URL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something weent wrong!`));
  });
}

export function FetchReviews(movieId) {
  const URL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something weent wrong!`));
  });
}

export function FetchQuery(query) {
  const URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something weent wrong!`));
  });
}
