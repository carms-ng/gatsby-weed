import React from 'react';
import styled from 'styled-components';

const IndexLinkStyles = styled.div`
  padding-bottom: 3rem;
`;

export default function IndexLink({ entry }) {
  const text = () => {
    if (entry.name && entry.title) {
      return `${entry.name}, ${entry.title}`
    } else if (entry.name) {
      return entry.name;
    } else {
      return entry.title;
    }
  }
  return (
    <IndexLinkStyles>
      <a 
        className="underline" 
        href={entry.url}
        target="_blank"
        rel="noreferrer"
      >
        {text()}
      </a>
      <span>
        {entry.date ? `, ${entry.date}` : ""}
      </span>
      <p className="mt-4">{entry.description}</p>
    </IndexLinkStyles>
  );
}