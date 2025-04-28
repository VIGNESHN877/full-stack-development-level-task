const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// File paths
const inputFile = path.join(__dirname, 'testFile.txt');
const compressedFile = path.join(__dirname, 'testFile.txt.gz');
const decompressedFile = path.join(__dirname, 'testFile_decompressed.txt');

// Compress file function
function compressFile(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(inputPath);
        const writeStream = fs.createWriteStream(outputPath);
        const gzip = zlib.createGzip();

        readStream.pipe(gzip).pipe(writeStream);

        writeStream.on('finish', () => {
            console.log('✅ Compression completed:', outputPath);
            resolve();
        });

        readStream.on('error', (err) => reject('Read error: ' + err));
        writeStream.on('error', (err) => reject('Write error: ' + err));
        gzip.on('error', (err) => reject('Compression error: ' + err));
    });
}

// Decompress file function
function decompressFile(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(inputPath);
        const writeStream = fs.createWriteStream(outputPath);
        const gunzip = zlib.createGunzip();

        readStream.pipe(gunzip).pipe(writeStream);

        writeStream.on('finish', () => {
            console.log('✅ Decompression completed:', outputPath);
            resolve();
        });

        readStream.on('error', (err) => reject('Read error: ' + err));
        writeStream.on('error', (err) => reject('Write error: ' + err));
        gunzip.on('error', (err) => reject('Decompression error: ' + err));
    });
}

// Compare two files
function compareFiles(file1, file2) {
    const data1 = fs.readFileSync(file1, 'utf8');
    const data2 = fs.readFileSync(file2, 'utf8');
    return data1 === data2;
}

// Main function
async function main() {
    try {
        // Step 1: Compress
        await compressFile(inputFile, compressedFile);

        // Step 2: Decompress
        await decompressFile(compressedFile, decompressedFile);

        // Step 3: Verify
        const match = compareFiles(inputFile, decompressedFile);
        if (match) {
            console.log('✅ Decompressed file matches the original!');
        } else {
            console.error('❌ Decompressed file does NOT match the original!');
        }
    } catch (err) {
        console.error('❌ Error occurred:', err);
    }
}

main();
