// Step 1: Create the higher-order function "operateOnArray"
function operateOnArray(array, operation) {
    return array.map(operation); // Apply the operation to each element
  }
  
  // Step 2: Create different callback functions
  
  // Doubles a number
  function double(num) {
    return num * 2;
  }
  
  // Squares a number
  function square(num) {
    return num * num;
  }
  
  // Converts a number to a string
  function toString(num) {
    return num.toString();
  }
  
  // Step 3: Create an array of numbers
  const numbers = [1, 2, 3, 4, 5];
  
  // Step 4: Call operateOnArray with each callback
  const doubledNumbers = operateOnArray(numbers, double);
  const squaredNumbers = operateOnArray(numbers, square);
  const stringNumbers = operateOnArray(numbers, toString);
  
  // Step 5: Print all results
  console.log("Original Numbers:", numbers);
  console.log("Doubled Numbers:", doubledNumbers);
  console.log("Squared Numbers:", squaredNumbers);
  console.log("String Numbers:", stringNumbers);
  