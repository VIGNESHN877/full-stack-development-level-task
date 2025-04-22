// Child.js
import React from 'react';

// Step 3: Use React.memo to prevent re-render unless props change
const Child = React.memo(({ onClick, clicks }) => {
  console.log('🔁 Child re-rendered');

  return (
    <div style={styles.child}>
      <p>Child Button Clicks: {clicks}</p>
      <button onClick={onClick} style={styles.button}>
        👶 Child Button
      </button>
    </div>
  );
});

const styles = {
  child: {
    border: '2px dashed #888',
    padding: '20px',
    marginTop: '20px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '1rem',
  },
};

export default Child;
