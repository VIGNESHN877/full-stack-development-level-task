// Import the 'fs' module (File System)
const fs = require('fs');

// Define the directory name
const dirName = 'new_folder';

// Check if the directory already exists
if (fs.existsSync(dirName)) {
  console.log(`${dirName} already exists.`);
} else {
  // Use fs.mkdir() to create the directory
  fs.mkdir(dirName, (err) => {
    if (err) {
      // Handle any error that occurs during directory creation
      console.error("Error creating directory:", err.message);
      return;
    }

    // Print success message after directory is created
    console.log(`${dirName} has been created successfully.`);
  });
}
