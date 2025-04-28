// Object Creation and Manipulation

// Step 1: Create a person object
const person = {
    name: "Alex Johnson",
    age: 28,
    city: "New York",
    hobbies: ["reading", "hiking", "photography"]
  };
  
  // Step 2: Access and print properties using dot notation
  console.log("Original Person Object:");
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`City: ${person.city}`);
  console.log(`Hobbies: ${person.hobbies.join(", ")}`);
  
  // Step 3: Add a new 'job' property
  person.job = "Web Developer";
  console.log("\nAfter adding job:");
  console.log(`Job: ${person.job}`);
  
  // Step 4: Modify the 'age' property
  person.age = 30;
  console.log("\nAfter updating age:");
  console.log(`New Age: ${person.age}`);
  
  // Step 5: Add a greet method
  person.greet = function() {
    return `Hello, my name is ${this.name}! Nice to meet you!`;
  };
  
  // Step 6: Call the greet method and print result
  console.log("\nGreeting:");
  console.log(person.greet());
  
  // Step 7: Print final object
  console.log("\nFinal Person Object:");
  console.log(person);