import React from 'react';
import sample from '../assets/videos/3.mp4';

export default function Video({ style, src }) {
  // console.log(props)
  return (
    <div>
      <video style={style} loop={true} autoPlay="autoplay" muted>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}