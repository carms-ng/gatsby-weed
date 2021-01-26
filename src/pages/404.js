import React from 'react';
import Video from '../components/Video';
import sample from '../assets/videos/3.mp4';

export default function FourOhFourPage() {
  return (
    <>
      <p>Page doesn't exist!</p>
      {/* passing in the cssStyle and src as props */}
      <Video style={{ width: `30vw` }} src={sample}/>
    </>
  );
}