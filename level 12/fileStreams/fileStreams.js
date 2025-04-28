const fs = require('fs');
const path = require('path');

// Paths
const sourceFile = path.join(__dirname, 'largeFile.txt');
const destinationFile = path.join(__dirname, 'largeFileCopy.txt');

// Step 1: Create a large file (only if it doesn't exist)
function createLargeFile(callback) {
    if (fs.existsSync(sourceFile)) {
        console.log('Large test file already exists.');
        callback();
        return;
    }

    console.log('Creating large file...');
    const writeStream = fs.createWriteStream(sourceFile);

    // Write 1 million lines (~1MB or larger)
    for (let i = 0; i < 1_000_000; i++) {
        writeStream.write('This is a sample line to fill the large file.\n');
    }
    writeStream.end();
    writeStream.on('finish', () => {
        console.log('Large file created successfully.');
        callback();
    });
    writeStream.on('error', (err) => {
        console.error('Error creating large file:', err);
    });
}

// Step 2: Copy the large file using streams
function copyLargeFile() {
    const readStream = fs.createReadStream(sourceFile);
    const writeStream = fs.createWriteStream(destinationFile);

    let totalBytes = 0;
    const fileSize = fs.statSync(sourceFile).size;

    console.log(`Copying file of size ${(fileSize / (1024 * 1024)).toFixed(2)} MB...`);

    readStream.on('data', (chunk) => {
        totalBytes += chunk.length;
        const progress = ((totalBytes / fileSize) * 100).toFixed(2);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`Progress: ${progress}%`);
    });

    readStream.on('error', (err) => {
        console.error('Error reading file:', err);
    });

    writeStream.on('error', (err) => {
        console.error('Error writing file:', err);
    });

    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('\nFile copy completed successfully.');
    });
}

// Run the script
createLargeFile(copyLargeFile);
