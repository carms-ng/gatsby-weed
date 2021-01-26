import React from 'react';

export default function IndexLink({link}) {
  return (
      <a href={link.url}>{link.title}</a>
  );
}