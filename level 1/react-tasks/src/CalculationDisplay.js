import React from 'react';

function CalculationDisplay() {
  const a = 5;
  const b = 22;
  return (
    <div>
      <p>The sum of {a} and {b} is: {a + b}</p>
      <p>The product of {a} and {b} is: {a * b}</p>
    </div>
  );
}

export default CalculationDisplay;