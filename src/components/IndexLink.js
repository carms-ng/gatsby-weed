import React from 'react';

export default function IndexLink({link}) {
  return (
      <button href={link.url}>{link.title}</button>
  );
}