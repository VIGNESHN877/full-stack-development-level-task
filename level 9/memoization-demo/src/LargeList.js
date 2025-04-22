// src/LargeList.js
import React from 'react';

const LargeList = ({ items }) => {
  console.log("Rendering LargeList...");

  return (
    <div>
      <h3>Large List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>Item {item}</li>
        ))}
      </ul>
    </div>
  );
};

// React.memo will prevent re-render unless props change
export default React.memo(LargeList);
