// Switch Statement: Day of Week Converter

// Step 1: Create day variable (change this value to test different cases)
const day = 3; // Can be any number from 1 to 7

// Step 2: Initialize message variable
let message = "";

// Step 3: Switch statement to determine day
switch (day) {
  case 1:
    message = "Monday";
    break;
  case 2:
    message = "Tuesday";
    break;
  case 3:
    message = "Wednesday";
    break;
  case 4:
    message = "Thursday";
    break;
  case 5:
    message = "Friday";
    break;
  case 6:
    message = "Saturday - It's the weekend!";
    break;
  case 7:
    message = "Sunday - It's the weekend!";
    break;
  default:
    message = "Invalid day number - Please enter a number between 1 and 7";
}

// Step 4: Print the result
console.log(`Day ${day}: ${message}`);

// Step 5: Additional test cases (uncomment to test)

console.log("\nTesting all days:");
for (let i = 0; i <= 8; i++) {
  let testMessage = "";
  switch (i) {
    case 1: testMessage = "Monday"; break;
    case 2: testMessage = "Tuesday"; break;
    case 3: testMessage = "Wednesday"; break;
    case 4: testMessage = "Thursday"; break;
    case 5: testMessage = "Friday"; break;
    case 6: testMessage = "Saturday - It's the weekend!"; break;
    case 7: testMessage = "Sunday - It's the weekend!"; break;
    default: testMessage = "Invalid day number";
  }
  console.log(`Day ${i}: ${testMessage}`);
}
