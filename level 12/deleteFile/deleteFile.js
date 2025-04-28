// Import the 'fs' module (File System)
const fs = require('fs');

// Define the file to be deleted
const fileToDelete = 'test.txt';

// Check if the file exists before attempting to delete it
if (fs.existsSync(fileToDelete)) {
  // Use fs.unlink() to delete the file
  fs.unlink(fileToDelete, (err) => {
    if (err) {
      // Handle any error that occurs during the file deletion
      console.error("Error deleting file:", err.message);
      return;
    }

    // Print confirmation message after successful deletion
    console.log(`${fileToDelete} has been deleted successfully.`);
  });
} else {
  // If the file doesn't exist, print a message
  console.log(`${fileToDelete} does not exist.`);
}
