// Import the 'fs' module (File System)
const fs = require('fs');

// Use fs.writeFile() to write to output.txt
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    // Handle error
    console.error("Error writing to the file:", err.message);
    return;
  }

  // If no error, print success message
  console.log('Data has been written to output.txt');
});
