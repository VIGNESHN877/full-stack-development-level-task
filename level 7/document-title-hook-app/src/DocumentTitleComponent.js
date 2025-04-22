// DocumentTitleComponent.js
import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function DocumentTitleComponent() {
  const [count, setCount] = useState(0);

  // Update the document title whenever `count` changes
  useDocumentTitle(`Clicked ${count} times`);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🖱 You clicked {count} times</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Click Me
      </button>
    </div>
  );
}

export default DocumentTitleComponent;
