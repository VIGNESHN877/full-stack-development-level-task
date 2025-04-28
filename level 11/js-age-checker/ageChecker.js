// Age Checker with Conditional Statements

// Step 1: Define the age variable (change this to test different cases)
const age = 25; // Example value (try 15, 18, 30, 70)

// Step 2: Check age conditions
console.log(`Age Check: You are ${age} years old.`);

if (age < 0) {
    console.log("❌ Invalid age. Age cannot be negative.");
} else if (age >= 65) {
    console.log("✅ You are a senior citizen.");
} else if (age >= 18) {
    console.log("✅ You are an adult.");
} else {
    console.log("✅ You are a minor.");
}