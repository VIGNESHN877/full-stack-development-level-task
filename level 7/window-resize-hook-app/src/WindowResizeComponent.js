// WindowResizeComponent.js
import React from 'react';
import useWindowResize from './useWindowResize';

function WindowResizeComponent() {
  const { width, height } = useWindowResize();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>📏 Window Size Tracker</h2>
      <p>Width: <strong>{width}px</strong></p>
      <p>Height: <strong>{height}px</strong></p>
      <p>Try resizing your browser window!</p>
    </div>
  );
}

export default WindowResizeComponent;
