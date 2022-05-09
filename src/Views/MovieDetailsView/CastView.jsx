import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from 'Services/API';

export function Cast() {
  const { MovieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    FetchCast(MovieId)
      .then(data => {
        setCast(data.cast);
        // console.log(cast);
      })
      .catch(error => console.log('Error: ', error));
  }, [MovieId]);

  return (
    <ul>
      {cast &&
        cast.map(actor => {
          const URL = `https://image.tmdb.org/t/p/original/${actor.profile_path}`;
          return (
            <li key={actor.id}>
              <img src={URL} alt={actor.name} width="100" />
              <p>{actor.name} </p>
              <p>Character: {actor.character} </p>
            </li>
          );
        })}
    </ul>
  );
}
