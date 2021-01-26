import React from 'react';

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