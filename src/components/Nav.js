import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PDF from '../assets/pdfs/What-is-a-Weed_FR.pdf';

console.log(PDF)

const NavStyles = styled.nav`
  z-index: 39;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  .btns-lang {
    display: flex;
    justify-content: flex-end;
  }
  .btn-lang {
    font-family: MonetaSans;
  }
`;

export default function Nav() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "Home_no-text.png" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <NavStyles>
      <div className="btns-lang">
        <button
          type="button"
          className="btn-lang p-2"
          title="Téléchargez le PDF"
        >
          <a href={PDF} target="_blank" rel="noreferrer">
          FR
          </a>
        </button>
      </div>
      <Link
        to="/"
        className="grid grid-cols-1 grid-rows-1 text-brown place-content-center place-items-center"
      >
        <Img
          fluid={data.fileName.childImageSharp.fluid}
          style={{ width: '40vw', maxWidth: '250px' }}
          className="col-span-full row-span-full"
        />
        <h6 className="col-span-full row-span-full text-1xl md:text-3xl pb-5 pr-5 md:pb-8 md:pr-10 uppercase">
          Home
        </h6>
      </Link>
    </NavStyles>
  );
}
