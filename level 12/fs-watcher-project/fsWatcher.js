const fs = require('fs');
const path = require('path');

// Directory to watch
const directoryToWatch = path.join(__dirname, 'watchedDir');
const logFilePath = path.join(__dirname, 'changeLog.txt');

// Function to log changes
function logChange(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;

    console.log(logEntry.trim());

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('❌ Error writing to log file:', err);
        }
    });
}

// Watch the directory recursively
function watchDirectory(dirPath) {
    try {
        fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
            if (filename) {
                const filePath = path.join(dirPath, filename);
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            // File was deleted
                            logChange(`🗑️ File deleted: ${filename}`);
                        } else {
                            console.error('❌ Error stating file:', err);
                        }
                        return;
                    }

                    if (stats.isFile()) {
                        if (eventType === 'rename') {
                            logChange(`📄 File created or renamed: ${filename}`);
                        } else if (eventType === 'change') {
                            logChange(`✏️ File modified: ${filename}`);
                        }
                    } else if (stats.isDirectory()) {
                        if (eventType === 'rename') {
                            logChange(`📁 Directory created or renamed: ${filename}`);
                        }
                    }
                });
            } else {
                console.log('⚡ Change detected but filename not provided.');
            }
        });

        console.log(`👀 Watching for changes in: ${dirPath}`);
    } catch (error) {
        console.error('❌ Error watching directory:', error);
    }
}

// Start watching
watchDirectory(directoryToWatch);
