// App.js
import React, { useState, useCallback } from 'react';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  // Step 1: useCallback to memoize the function
  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []); // No dependencies – this function will be memoized once

  return (
    <div style={styles.container}>
      <h2>useCallback Memoized Callback</h2>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={styles.button}>
        ➕ Increase Parent Count
      </button>

      {/* Step 2: Pass the memoized function to child */}
      <Child onClick={handleClick} clicks={clicks} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default App;
