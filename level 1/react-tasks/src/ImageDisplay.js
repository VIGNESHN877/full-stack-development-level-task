import React from 'react';
import logo from './images.jpg'; // Using default React logo, or use your own image

function ImageDisplay() {
  return (
    <img 
      src={logo} 
      alt="React Logo" 
      style={{ width: '200px', height: '200px' }}
    />
  );
}

export default ImageDisplay;