// src/ChildButton.js
import React from 'react';

const ChildButton = React.memo(({ onClick }) => {
  console.log("Rendering ChildButton");
  return <button onClick={onClick}>Click Child Button</button>;
});

export default ChildButton;
