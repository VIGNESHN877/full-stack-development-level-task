// Import the 'fs' module (File System)
const fs = require('fs');

// Use fs.readFile() to read sample.txt
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    // Handle error
    console.error("Error reading the file:", err.message);
    return;
  }
  
  // If no error, print file contents
  console.log("Contents of sample.txt:");
  console.log(data);
});
