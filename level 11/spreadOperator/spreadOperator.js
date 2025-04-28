// Step 1: Create two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Step 2: Combine arrays using spread operator
const combinedArray = [...array1, ...array2];

// Step 3: Create two objects
const object1 = { name: "Alice", age: 25 };
const object2 = { city: "New York", country: "USA" };

// Step 4: Combine objects using spread operator
const combinedObject = { ...object1, ...object2 };

// Step 5: Create a copy of array1 and modify it
const copiedArray = [...array1];
copiedArray.push(99); // Modify copied array

// Step 6: Print all results
console.log("Original Array 1:", array1);
console.log("Original Array 2:", array2);
console.log("Combined Array:", combinedArray);

console.log("\nOriginal Object 1:", object1);
console.log("Original Object 2:", object2);
console.log("Combined Object:", combinedObject);

console.log("\nCopied and Modified Array:", copiedArray);
console.log("Original Array after copy-modify (should be unchanged):", array1);
advancedArrayProcessingadvancedArrayProcessing