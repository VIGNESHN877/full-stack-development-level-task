// src/VirtualList.js
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const itemCount = 10000;

// Generate 10,000 items
const data = Array.from({ length: itemCount }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, style }) => (
  <div style={{ ...style, padding: '10px', borderBottom: '1px solid #ccc' }}>
    {data[index]}
  </div>
);

const VirtualList = () => {
  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h2>Virtual Scrolling List (10,000 items)</h2>
      <List
        height={500}
        itemCount={itemCount}
        itemSize={35} // height of each row in px
        width={'100%'}
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualList;
