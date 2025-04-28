const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Secret key and IV (Initialization Vector)
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16); // 128-bit IV

// Paths
const originalFilePath = path.join(__dirname, 'sensitive.txt');
const encryptedFilePath = path.join(__dirname, 'sensitive.enc');
const decryptedFilePath = path.join(__dirname, 'sensitive_decrypted.txt');

// Encrypt function
function encryptFile(inputPath, outputPath) {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    input.pipe(cipher).pipe(output);

    output.on('finish', () => {
        console.log('✅ File successfully encrypted to', outputPath);
        decryptFile(encryptedFilePath, decryptedFilePath);
    });

    output.on('error', (err) => {
        console.error('Error encrypting file:', err);
    });
}

// Decrypt function
function decryptFile(inputPath, outputPath) {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    input.pipe(decipher).pipe(output);

    output.on('finish', () => {
        console.log('✅ File successfully decrypted to', outputPath);

        // Verify original and decrypted files
        verifyFiles(originalFilePath, decryptedFilePath);
    });

    output.on('error', (err) => {
        console.error('Error decrypting file:', err);
    });
}

// Verify if decrypted content matches original
function verifyFiles(file1Path, file2Path) {
    try {
        const originalContent = fs.readFileSync(file1Path, 'utf8');
        const decryptedContent = fs.readFileSync(file2Path, 'utf8');

        if (originalContent === decryptedContent) {
            console.log('✅ Decrypted content matches original content! 🔥');
        } else {
            console.error('❌ Decrypted content does NOT match the original!');
        }
    } catch (err) {
        console.error('Error verifying files:', err);
    }
}

// Start encryption
encryptFile(originalFilePath, encryptedFilePath);
