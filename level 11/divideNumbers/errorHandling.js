// Step 1: Create the divideNumbers function
function divideNumbers(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  // Step 2: Call the function with various inputs
  const testCases = [
    { a: 10, b: 2 },
    { a: 15, b: 3 },
    { a: 8, b: 0 },  // This should trigger an error
    { a: 20, b: 5 },
    { a: 5, b: 0 },  // Another division by zero
  ];
  
  testCases.forEach(({ a, b }) => {
    try {
      const result = divideNumbers(a, b);
      console.log(`Result of ${a} / ${b} = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      console.log(`Finished attempting to divide ${a} by ${b}\n`);
    }
  });
  