import React, { useState } from 'react';

function Counter() {
  // Step 2: Initialize the counter using useState
  const [count, setCount] = useState(0);

  // Step 3: Create functions to handle increment and decrement
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Counter</h2>
      <h1>{count}</h1>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
