// Template Literals: String Interpolation and Formatting

// Step 1: Create variables
const firstName = "Sarah";
const lastName = "Williams";
const age = 28;
const birthYear = 1995;
const currentYear = new Date().getFullYear();

// Step 2: Basic template literal
const greeting = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting);

// Step 3: Multi-line template literal with calculation
const bio = `
  User Profile:
  Name: ${firstName} ${lastName}
  Age: ${age}
  Birth Year: ${birthYear}
  Current Year: ${currentYear}
  Years Until 40: ${40 - age}
`;
console.log(bio);

// Step 4: Template literal with ternary operator
const ageMessage = `I am ${age} years old. ${age >= 21 ? "I can legally drink in the US." : "I'm not old enough to drink in the US."}`;
console.log(ageMessage);

// Step 5: Advanced example with function
function getGeneration(year) {
  if (year >= 1997) return "Gen Z";
  if (year >= 1981) return "Millennial";
  if (year >= 1965) return "Gen X";
  return "Baby Boomer or older";
}

const generationInfo = `
  Generation Info:
  ${firstName} was born in ${birthYear}, which makes her a ${getGeneration(birthYear)}.
  ${age >= 30 ? "She's experienced in life!" : "She's still young!"}
`;
console.log(generationInfo);