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
    margin: 1.5rem 0;
    font-size: 1.25rem;
    letter-spacing: 0.05em;
  }
  li {
    margin: 0.5rem 5px;
  }
  ul {
    list-style: none;
    margin-right: 100px;
  }
`;

export default function Nav() {
  return (
    <FooterStyles>
      <hr />
      <section className="md:flex mt-8">
        <ul>
          <h6>overview</h6>
          <li>
            <Link to="index-concrete-plant">
              0.1 CONCRETE & PLANT RELATIONSHIPS
            </Link>
          </li>
          <li>
            <Link to="index-conditioned-nature">0.2 CONDITIONED NATURE</Link>
          </li>
          <li>
            <Link to="index-plants-witness">0.3 PLANTS AS WITNESSES</Link>
          </li>
          <li>
            <Link to="index-third-landscape">0.4 THIRD LANDSCAPE</Link>
          </li>
          <li>
            <Link to="index-displace-migrate">
              0.5 DISPLACEMENT / MIGRATION
            </Link>
          </li>
          <li>
            <Link to="index-body-landscape">0.6 BODY IN / AS LANDSCAPE</Link>
          </li>
          <li>
            <Link to="index-furthermore">0.7 FURTHERMORE</Link>
          </li>
        </ul>
        <ol>
          <h6>footnotes</h6>
          <li>1. Nowness</li>
          <li>
            <a href="https://www.nytimes.com/2016/09/23/t-magazine/design/isabel-julian-bannerman-garden-designer-cornwall-norman-castle.html">
              2. Richardson, Tim, NY Times
            </a>
          </li>
        </ol>
      </section>
    </FooterStyles>
  );
}
