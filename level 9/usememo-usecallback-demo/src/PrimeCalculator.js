// src/PrimeCalculator.js
import React, { useState, useMemo, useCallback } from 'react';
import ChildButton from './ChildButton';

// Expensive function to calculate prime numbers
const findPrimes = (limit) => {
  console.log("Calculating primes...");
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
};

const PrimeCalculator = () => {
  const [limit, setLimit] = useState(10000);
  const [count, setCount] = useState(0);

  // Memoize prime number calculation
  const primes = useMemo(() => findPrimes(limit), [limit]);

  // Memoized event handler
  const handleClick = useCallback(() => {
    alert("Button in child clicked!");
  }, []);

  return (
    <div>
      <h2>useMemo & useCallback Optimization</h2>
      <div>
        <label>Limit: </label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        />
      </div>
      <div>
        <h4>Prime Numbers Count: {primes.length}</h4>
        <p>Example Primes: {primes.slice(0, 10).join(', ')}...</p>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Counter</button>
        <p>Counter: {count}</p>
      </div>
      <ChildButton onClick={handleClick} />
    </div>
  );
};

export default PrimeCalculator;
