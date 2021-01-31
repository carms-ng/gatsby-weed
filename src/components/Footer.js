import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.nav`
  padding: 20px;

  hr {
    border: 2px solid var(--green);
    background-color: var(--green);
  }
  h6 {
    text-transform: uppercase;
    margin: 1rem 0;
    font-size: 1.25rem;
    letter-spacing: 0.05em;
  }
  li {
    margin: 0.5rem 0;
  }
  ul {
    list-style: none;
  }
  a:hover {
      text-decoration: underline;
  }
`;

export default function Nav() {
  return (
    <FooterStyles>
      <hr />
      <section className="md:flex mt-2 mx-0 md:m-4">
        <h6 className="pr-16">
          <Link to="/">
            Home
          </Link>
        </h6>
        <ul className="md:mr-24 xl:mr-36">
          <h6>overview</h6>
          <li>
            <Link to="/index-concrete-plant">
              0.1 CONCRETE & PLANT RELATIONSHIPS
            </Link>
          </li>
          <li>
            <Link to="/index-conditioned-nature">0.2 CONDITIONED NATURE</Link>
          </li>
          <li>
            <Link to="/index-plants-witness">0.3 PLANTS AS WITNESSES</Link>
          </li>
          <li>
            <Link to="/index-third-landscape">0.4 THIRD LANDSCAPE</Link>
          </li>
          <li>
            <Link to="/index-displace-migrate">
              0.5 DISPLACEMENT / MIGRATION
            </Link>
          </li>
          <li>
            <Link to="/index-body-landscape">0.6 BODY IN / AS LANDSCAPE</Link>
          </li>
          <li>
            <Link to="/index-furthermore">0.7 FURTHERMORE</Link>
          </li>
        </ul>
        <ul className="mt-14">
          <li>
            <Link to="/amaranth">Amaranth</Link>
          </li>
          <li>
            <Link to="/concrete-plant">Plants through Concrete</Link>
          </li>
          <li>
            <Link to="/conditioned-nature">Negotiated Nature</Link>
          </li>
          <li>
            <Link to="/third-landscape">Third Landscape</Link>
          </li>
          <li>
            <Link to="/body-landscape">Body In Landscape</Link>
          </li>
          <li>
            <Link to="/fuki">Body As Landscape</Link>
          </li>
          <li>
            <Link to="/roses">Wild Roses</Link>
          </li>
        </ul>
      </section>
    </FooterStyles>
  );
}
