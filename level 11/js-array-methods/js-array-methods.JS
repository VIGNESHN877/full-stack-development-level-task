// Advanced Array Methods Demonstration

// Step 1: Create an array of numbers 1-10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array:", numbers);

// Step 2: Use map() to square each number
const squaredNumbers = numbers.map(num => num * num);
console.log("\nSquared Numbers (map()):", squaredNumbers);

// Step 3: Use filter() to get odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("\nOdd Numbers (filter()):", oddNumbers);

// Step 4: Use reduce() to calculate sum
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("\nSum of All Numbers (reduce()):", sum);

// Step 5: Use forEach() to print number and its square root
console.log("\nNumber and Square Roots (forEach()):");
numbers.forEach(num => {
  console.log(`Number: ${num}, Square Root: ${Math.sqrt(num).toFixed(2)}`);
});

// Bonus: Chaining methods example
const result = numbers
  .filter(num => num > 5)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);
console.log("\nBonus - Chained Methods Result (filter>map>reduce):", result);