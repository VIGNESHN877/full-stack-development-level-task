// Step 1: Create a recursive factorial function
function factorial(n) {
    // Step 2: Error handling for negative numbers
    if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers");
    }
    
    // Step 3: Base case
    if (n === 0 || n === 1) {
      return 1;
    }
    
    // Step 4: Recursive case
    return n * factorial(n - 1);
  }
  
  // Step 5: Test the function with several numbers
  const testNumbers = [5, 0, 1, 7, -3];
  
  testNumbers.forEach(num => {
    try {
      const result = factorial(num);
      console.log(`Factorial of ${num} is: ${result}`);
    } catch (error) {
      console.error(`Error calculating factorial of ${num}: ${error.message}`);
    }
  });
  