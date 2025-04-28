// Import the 'fs' module (File System)
const fs = require('fs');

// Define the directory to list (current directory in this case)
const dirPath = '.';

// Use fs.readdir() to read the contents of the directory
fs.readdir(dirPath, (err, files) => {
  if (err) {
    // Handle error if the directory cannot be read
    console.error("Error reading directory:", err.message);
    return;
  }

  // Loop through each file/directory and print whether it's a file or directory
  files.forEach(file => {
    const filePath = `${dirPath}/${file}`;
    // Use fs.statSync() to check if it's a directory
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      console.log(`[DIR] ${file}`);
    } else {
      console.log(`[FILE] ${file}`);
    }
  });
});
