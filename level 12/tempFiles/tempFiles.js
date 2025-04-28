const fs = require('fs');
const path = require('path');
const os = require('os');

// Function to create temporary files
function createTempFiles() {
    const tempDirPrefix = path.join(os.tmpdir(), 'mytemp-');

    fs.mkdtemp(tempDirPrefix, (err, folder) => {
        if (err) {
            console.error('Error creating temporary directory:', err);
            return;
        }

        console.log('Temporary directory created:', folder);

        const numberOfFiles = 5; // You can change the number of files you want

        for (let i = 1; i <= numberOfFiles; i++) {
            const filePath = path.join(folder, `tempfile${i}.txt`);
            const fileData = `This is the content of temporary file ${i}`;

            fs.writeFile(filePath, fileData, (err) => {
                if (err) {
                    console.error(`Error writing to file ${filePath}:`, err);
                } else {
                    console.log(`File created: ${filePath}`);
                }
            });
        }
    });
}

// Run the function
createTempFiles();
