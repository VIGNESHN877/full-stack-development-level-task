// Import the 'fs' module (File System)
const fs = require('fs');

// Specify the file path
const filePath = 'test.txt';

// Use fs.stat() to get information about the file
fs.stat(filePath, (err, stats) => {
  if (err) {
    // Handle error if the file does not exist or other issues occur
    console.error("Error retrieving file stats:", err.message);
    return;
  }

  // Format the creation time and last modified time into a human-readable format
  const creationTime = new Date(stats.birthtime).toLocaleString();
  const modifiedTime = new Date(stats.mtime).toLocaleString();

  // Display the file information
  console.log(`File size: ${stats.size} bytes`);
  console.log(`File created at: ${creationTime}`);
  console.log(`Last modified at: ${modifiedTime}`);
});
