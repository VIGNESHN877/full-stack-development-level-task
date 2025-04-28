// Import the 'fs' module (File System)
const fs = require('fs');

// Define the file to be monitored
const fileToWatch = 'test.txt';

// Use fs.watch() to monitor the file for changes
fs.watch(fileToWatch, (eventType, filename) => {
  if (filename) {
    // Print the type of event and the file name
    if (eventType === 'rename') {
      console.log(`${filename} has been renamed or deleted.`);
    } else if (eventType === 'change') {
      console.log(`${filename} has been modified.`);
    } else {
      console.log(`Some other event occurred on ${filename}`);
    }
  } else {
    console.log('Filename not provided');
  }
});

console.log(`Watching for changes on ${fileToWatch}...`);
