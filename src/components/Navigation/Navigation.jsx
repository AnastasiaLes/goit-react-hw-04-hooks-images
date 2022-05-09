import { Nav, NavElement } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavElement to="/">Home</NavElement>
      <NavElement to="/movies">Movies</NavElement>
    </Nav>
  );
};
