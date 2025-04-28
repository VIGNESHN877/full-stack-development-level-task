// String Manipulation in JavaScript

// Step 1: Create string variables
const fullName = "John Doe";
const homeTown = "New York";

// Step 2: Perform string operations
const upperCaseName = fullName.toUpperCase();  // Convert to uppercase
const nameLength = fullName.length;           // Get length of string
const firstName = fullName.split(' ')[0];      // Extract first name

// Step 3: Concatenate strings
const combinedString = fullName + " from " + homeTown;

// Step 4: Print all results to the console
console.log("String Manipulation Results:");
console.log(`Original Name: ${fullName}`);
console.log(`Uppercase Name: ${upperCaseName}`);
console.log(`Name Length: ${nameLength} characters`);
console.log(`First Name: ${firstName}`);
console.log(`Hometown: ${homeTown}`);
console.log(`Combined String: ${combinedString}`);