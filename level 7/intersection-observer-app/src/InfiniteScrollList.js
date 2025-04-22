// InfiniteScrollList.js
import React, { useState, useCallback } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

function InfiniteScrollList() {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));

  const loadMore = useCallback(() => {
    setItems(prev =>
      [...prev, ...Array.from({ length: 5 }, (_, i) => `Item ${prev.length + i + 1}`)]
    );
  }, []);

  const loaderRef = useIntersectionObserver(loadMore, {
    threshold: 1,
  });

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>📦 Infinite Scroll List</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              margin: '10px',
              padding: '10px',
              background: '#f0f0f0',
              borderRadius: '8px',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div ref={loaderRef} style={{ padding: '20px', color: '#888' }}>
        ⏳ Loading more...
      </div>
    </div>
  );
}

export default InfiniteScrollList;
