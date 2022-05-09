import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  outline: solid 1px black;
  padding: 20px;
  gap: 20px;
  /* background-color: red; */
`;
export const NavElement = styled(NavLink)`
  /* background-color: red; */
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-style: 18px;
  color: darkgray;
  padding: 12px;

  :hover {
    color: black;
  }

  &.active {
    color: red;
  }
`;
