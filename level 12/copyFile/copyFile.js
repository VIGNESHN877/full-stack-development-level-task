// Import the 'fs' module (File System)
const fs = require('fs');

// Define the source and destination file paths
const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

// Check if the destination file already exists
if (fs.existsSync(destinationFile)) {
  console.log(`Error: ${destinationFile} already exists.`);
} else {
  // Use fs.copyFile() to copy the file
  fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      // Handle any errors during the file copy operation
      console.error("Error copying file:", err.message);
      return;
    }

    // If the file copy is successful, print a success message
    console.log(`${sourceFile} has been copied to ${destinationFile}`);
  });
}
