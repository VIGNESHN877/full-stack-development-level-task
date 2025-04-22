// App.js
import React, { useRef } from 'react';

function App() {
  // Step 1: Create the ref
  const inputRef = useRef(null);

  // Step 2: Create a function to focus the input
  const handleFocus = () => {
    inputRef.current.focus(); // Step 3: Direct DOM access
  };

  return (
    <div style={styles.container}>
      <h2>useRef DOM Manipulation</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={styles.input}
      />
      <br />
      <button onClick={handleFocus} style={styles.button}>
        🎯 Focus Input
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '60px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '300px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default App;
