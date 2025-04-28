// Step 1: Create the createCounter function
function createCounter() {
    let count = 0; // Private variable inside closure
    
    return function() { // Inner function forms a closure
      count++;
      return count;
    };
  }
  
  // Step 2: Create two separate counters
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  // Step 3: Increment each counter multiple times and print
  console.log("Counter 1:", counter1()); // 1
  console.log("Counter 1:", counter1()); // 2
  console.log("Counter 2:", counter2()); // 1 (separate count)
  console.log("Counter 1:", counter1()); // 3
  console.log("Counter 2:", counter2()); // 2
  console.log("Counter 2:", counter2()); // 3
  console.log("Counter 1:", counter1()); // 4
  