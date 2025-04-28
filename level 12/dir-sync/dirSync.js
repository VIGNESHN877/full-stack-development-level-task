const fs = require('fs');
const path = require('path');

// Paths
const sourceDir = path.join(__dirname, 'sourceDir');
const targetDir = path.join(__dirname, 'targetDir');

// Utility: Get list of files in a directory
function getFiles(dir) {
    return fs.readdirSync(dir);
}

// Utility: Get file full path
function getFilePath(dir, file) {
    return path.join(dir, file);
}

// Compare file contents
function filesAreDifferent(file1, file2) {
    const file1Stat = fs.statSync(file1);
    const file2Stat = fs.statSync(file2);

    // Compare size or modified time
    return file1Stat.size !== file2Stat.size || file1Stat.mtimeMs > file2Stat.mtimeMs;
}

// Synchronize function
function syncDirectories(source, target) {
    let copied = [];
    let updated = [];
    let deleted = [];

    try {
        // Step 1: Copy new or updated files
        const sourceFiles = getFiles(source);
        for (const file of sourceFiles) {
            const sourcePath = getFilePath(source, file);
            const targetPath = getFilePath(target, file);

            if (!fs.existsSync(targetPath)) {
                fs.copyFileSync(sourcePath, targetPath);
                copied.push(file);
            } else if (filesAreDifferent(sourcePath, targetPath)) {
                fs.copyFileSync(sourcePath, targetPath);
                updated.push(file);
            }
        }

        // Step 2: Delete files not in source
        const targetFiles = getFiles(target);
        for (const file of targetFiles) {
            const sourcePath = getFilePath(source, file);
            const targetPath = getFilePath(target, file);

            if (!fs.existsSync(sourcePath)) {
                fs.unlinkSync(targetPath);
                deleted.push(file);
            }
        }

        // Step 3: Print summary
        console.log('\n=== Synchronization Summary ===');
        console.log('Copied files:', copied.length ? copied.join(', ') : 'None');
        console.log('Updated files:', updated.length ? updated.join(', ') : 'None');
        console.log('Deleted files:', deleted.length ? deleted.join(', ') : 'None');
        console.log('✅ Synchronization complete!\n');
    } catch (err) {
        console.error('❌ Error during synchronization:', err);
    }
}

// Start synchronization
syncDirectories(sourceDir, targetDir);
