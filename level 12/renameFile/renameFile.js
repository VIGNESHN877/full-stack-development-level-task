// Import the 'fs' module (File System)
const fs = require('fs');

// Define the original file path and the new file name
const oldFileName = 'original.txt';
const newFileName = 'renamed.txt';

// Use fs.rename() to rename the file
fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    // Handle error if renaming fails
    console.error("Error renaming the file:", err.message);
    return;
  }

  // If renaming is successful, print this message
  console.log(`File renamed successfully from ${oldFileName} to ${newFileName}`);
});
