// Import the 'fs' module (File System)
const fs = require('fs');

// Use fs.existsSync() to check if 'test.txt' exists
const filePath = 'test.txt';

if (fs.existsSync(filePath)) {
  // If the file exists, print this message
  console.log(`${filePath} exists.`);
} else {
  // If the file doesn't exist, print this message
  console.log(`${filePath} does not exist.`);
}
