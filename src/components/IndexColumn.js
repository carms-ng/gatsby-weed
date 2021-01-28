import React from 'react';
import IndexLink from '../components/IndexLink';

export default function IndexColumn({category, entries}) {
  return (
    <div className="col-span-1">
      <h3 className="py-8 uppercase">{category}</h3>
      {entries.map(entry => <IndexLink key={entry.name + entry.title} entry={entry} />)}
    </div>
  );
}