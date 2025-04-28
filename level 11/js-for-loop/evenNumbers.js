// Basic For Loop: Even Numbers & Sum

// Step 1: Initialize sum variable
let sum = 0;

console.log("Even numbers between 1 and 10:");

// Step 2: Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
  // Step 3: Check if the number is even
  if (i % 2 === 0) {
    console.log(i); // Print the even number
    sum += i;      // Add to the sum
  }
}

// Step 4: Print the total sum of even numbers
console.log(`Sum of even numbers: ${sum}`);