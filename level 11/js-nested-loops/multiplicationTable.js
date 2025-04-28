// Nested Loops: 3x3 Multiplication Table

// Step 1: Create the multiplication table
console.log("3x3 Multiplication Table:");
console.log("------------------------");

// Outer loop for rows (1 to 3)
for (let i = 1; i <= 3; i++) {
  let row = ""; // Initialize an empty string for each row
  
  // Inner loop for columns (1 to 3)
  for (let j = 1; j <= 3; j++) {
    const product = i * j;
    // Format each product to take up 4 spaces for alignment
    row += `${product}\t`; // \t adds tab spacing
  }
  
  // Print the completed row
  console.log(row);
}

// Step 2: Add some visual separation
console.log("\nAlternative Format with Borders:");
console.log("-----------------------------");

// Print table with borders
for (let i = 1; i <= 3; i++) {
  let row = "| ";
  for (let j = 1; j <= 3; j++) {
    row += `${i * j} | `;
  }
  console.log(row);
  if (i < 3) console.log("---------------");
}