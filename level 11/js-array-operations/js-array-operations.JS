// Array Operations: Manipulating and Slicing Arrays

// Step 1: Create an array of favorite foods
let favoriteFoods = ["Pizza", "Sushi", "Burger", "Pasta", "Ice Cream"];

// Step 2: Print the original array
console.log("Original Array:", favoriteFoods);

// Step 3: Add an item to the end using push()
favoriteFoods.push("Tacos");
console.log("After push('Tacos'):", favoriteFoods);

// Step 4: Remove the first item using shift()
favoriteFoods.shift();
console.log("After shift():", favoriteFoods);

// Step 5: Find the array length
console.log("Array Length:", favoriteFoods.length);

// Step 6: Find the index of a specific food (e.g., "Pasta")
const pastaIndex = favoriteFoods.indexOf("Pasta");
console.log("Index of 'Pasta':", pastaIndex);

// Step 7: Create a new array by slicing from index 1 to 3
const slicedArray = favoriteFoods.slice(1, 3);
console.log("Sliced Array (index 1 to 3):", slicedArray);

// Step 8: Print final arrays
console.log("Final Modified Array:", favoriteFoods);
console.log("New Sliced Array:", slicedArray);