import React from 'react';
import sample from '../assets/videos/3.mp4';

export default function Video() {
  return (
    <div>
      <video style={{ width: `100%` }} loop={true} autoPlay="autoplay" muted>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  )
}