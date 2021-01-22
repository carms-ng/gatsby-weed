import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.nav`
  padding: 20px;

  hr {
    border: 2px solid var(--green);
  }
  p {
    text-transform: uppercase;
    margin: 1rem 0;
    font-size: 1.25rem;
  }
  li {
    margin: 0.5rem 5px;
  }
  ul {
    list-style: none;
    margin-right: 100px;
  }
  ol {
    list-style: auto;
  }
  ol li {
    margin-left: 20px;
  }
`;

export default function Nav() {

  return (
    <FooterStyles>
      <hr/>
      <section className="md:flex">
        
        <ul>
          <p>overview</p>
          <li>
            <Link to="concrete-plant">0.1 CONCRETE & PLANT RELATIONSHIPS</Link>
          </li>
          <li>
            <Link to="conditioned-nature">0.2 CONDITIONED NATURE</Link>
          </li>
          <li>
            <Link to="plants-witness">0.3 PLANTS AS WITNESSES</Link>
          </li>
          <li>
            <Link to="third-landscape">0.4 THIRD LANDSCAPE</Link>
          </li>
          <li>
            <Link to="displace-migrate">0.5 DISPLACEMENT / MIGRATION</Link>
          </li>
          <li>
            <Link to="body-landscape">0.6 BODY IN / AS LANDSCAPE</Link>
          </li>
          <li>
            <Link to="furthermore">0.7 FURTHERMORE</Link>
          </li>
        </ul>
        <ol>
          <p>footnotes</p>
          <li>Nowness</li>
          <li>
            <a href="https://www.nytimes.com/2016/09/23/t-magazine/design/isabel-julian-bannerman-garden-designer-cornwall-norman-castle.html">
              Richardson, Tim, NY Times
            </a>
          </li>
        </ol>
      </section>
    </FooterStyles>
  )}
