import React from 'react';

export default function Video({ className, style, src }) {
  return (
    <div>
      <video className={className ? className : ""} style={style} loop={true} autoPlay="autoplay" muted>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
