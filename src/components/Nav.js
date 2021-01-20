import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
      list-style: none;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
