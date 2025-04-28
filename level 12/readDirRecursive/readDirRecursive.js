// Import the 'fs' module (File System)
const fs = require('fs');
const path = require('path');

// Function to read a directory recursively
const readDirectoryRecursive = (dirPath) => {
  // Use fs.readdir() to get all files and subdirectories
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dirPath}:`, err.message);
      return;
    }

    // Loop through each file/subdirectory
    files.forEach((file) => {
      const fullPath = path.join(dirPath, file); // Full path of the file/subdirectory

      // Use fs.stat() to check if it's a file or a directory
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for ${fullPath}:`, err.message);
          return;
        }

        // Print the full path
        console.log(fullPath);

        // If it's a directory, call the function recursively
        if (stats.isDirectory()) {
          readDirectoryRecursive(fullPath); // Recurse into the subdirectory
        }
      });
    });
  });
};

// Directory to start reading (change this to the desired directory)
const directoryToRead = './testDirectory';

// Start reading the directory recursively
readDirectoryRecursive(directoryToRead);
