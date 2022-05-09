import { NavLink } from 'react-router-dom';
import {
  AditionalInfoLinks,
  AditionalInfoWrap,
} from './MovieDetailsView.styled';

export function AditionalInfo(movieId) {
  return (
    <AditionalInfoWrap>
      <h3>Aditional information</h3>
      <AditionalInfoLinks>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
      </AditionalInfoLinks>
    </AditionalInfoWrap>
  );
}
