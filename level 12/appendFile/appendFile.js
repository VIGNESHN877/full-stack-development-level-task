// Import the 'fs' module (File System)
const fs = require('fs');

// Use fs.appendFile() to append data to output.txt
fs.appendFile('output.txt', '\nMore content here.', (err) => {
  if (err) {
    // Handle error
    console.error("Error appending to the file:", err.message);
    return;
  }

  // If no error, print success message
  console.log('Data has been appended to output.txt');
});
