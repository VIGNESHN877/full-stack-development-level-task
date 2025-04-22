// src/App.js
import React, { useState, useEffect } from 'react';
import LargeList from './LargeList';

const App = () => {
  const [counter, setCounter] = useState(0);

  // Counter updates every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // List with 1000 items
  const largeData = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <LargeList items={largeData} />
    </div>
  );
};

export default App;
