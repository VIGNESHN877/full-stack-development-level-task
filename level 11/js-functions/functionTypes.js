// Function Declaration: Different Types of Functions

// 1. Regular Function (Function Declaration)
function multiply(a, b) {
    return a * b;
  }
  
  // 2. Function Expression
  const divide = function(a, b) {
    return a / b;
  };
  
  // 3. Arrow Function
  const power = (base, exponent) => base ** exponent;
  
  // Testing the functions with different arguments
  console.log("Function Results:");
  console.log(`Multiply(5, 3): ${multiply(5, 3)}`);
  console.log(`Divide(10, 2): ${divide(10, 2)}`);
  console.log(`Power(2, 4): ${power(2, 4)}`);
  
  // Additional test cases
  console.log("\nAdditional Test Cases:");
  console.log(`Multiply(7, 8): ${multiply(7, 8)}`);
  console.log(`Divide(100, 5): ${divide(100, 5)}`);
  console.log(`Power(3, 3): ${power(3, 3)}`);