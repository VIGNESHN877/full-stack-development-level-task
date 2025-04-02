import React from 'react';

function ColoredBox({ color }) {
  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: color || 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto',
    borderRadius: '8px'
  };

  return <div style={boxStyle}>This box is {color || 'blue'}</div>;
}

export default ColoredBox;