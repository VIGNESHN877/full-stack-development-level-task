// App.js
import React, { useReducer } from 'react';

// Step 1: Define initial state
const initialState = { count: 0 };

// Step 2: Create the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  // Step 3: useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.container}>
      <h2>useReducer Counter</h2>
      <p style={styles.count}>Count: {state.count}</p>

      {/* Step 4: Dispatch actions */}
      <div>
        <button onClick={() => dispatch({ type: 'increment' })} style={styles.button}>
          ➕ Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })} style={styles.button}>
          ➖ Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })} style={styles.button}>
          🔁 Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  count: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default Counter;
