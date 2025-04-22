// App.js
import React from 'react';
import useToggle from './useToggle';

function App() {
  // Step 4: Use the custom hook
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div style={styles.container}>
      <h2>useToggle Custom Hook</h2>
      <button onClick={toggleVisibility} style={styles.button}>
        {isVisible ? '🙈 Hide' : '👀 Show'} Content
      </button>

      {/* Step 5: Conditionally render content */}
      {isVisible && (
        <div style={styles.box}>
          <p>SNS College of Engineering (Autonomous) is a multi- disciplinary global institution established in the year 2007, is affiliated to Anna University, Chennai and approved by AICTE, New Delhi. Since the inception, SNSCE has reformed and refined the boundaries of intellectual and creative thoughts as a pre-eminent academic center.</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    marginBottom: '20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  box: {
    padding: '20px',
    backgroundColor: '#e0f7fa',
    border: '1px solid #0097a7',
    borderRadius: '8px',
  },
};

export default App;
