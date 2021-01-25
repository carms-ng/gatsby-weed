import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const NavStyles = styled.nav`
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  .btns-lang {
    display: flex;
    justify-content: center;
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
          fluid(maxWidth: 250) {
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
          className="btn-lang text-2xl md:text-4xl p-2"
          href="#"
        >
          EN
        </button>
        <button
          type="button"
          className="btn-lang text-2xl md:text-4xl p-2"
          href="#"
        >
          FR
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
