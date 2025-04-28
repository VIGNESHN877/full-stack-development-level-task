const fs = require('fs');
const path = require('path');

// File path
const filePath = path.join(__dirname, 'data.json');

// Read, modify, and write JSON data
function modifyJsonFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the JSON file:', err);
            return;
        }

        try {
            let jsonData = JSON.parse(data);

            console.log('Original Data:', jsonData);

            // Modify the data
            // 1. Add a new item
            const newItem = { id: 4, name: "David", age: 28 };
            jsonData.push(newItem);

            // 2. Update an existing item (e.g., update Bob's age)
            const bob = jsonData.find(item => item.name === "Bob");
            if (bob) {
                bob.age = 32;
            }

            // 3. Remove an item (e.g., remove Charlie)
            jsonData = jsonData.filter(item => item.name !== "Charlie");

            console.log('Modified Data:', jsonData);

            // Write the modified data back to the file
            fs.writeFile(filePath, JSON.stringify(jsonData, null, 4), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing to the JSON file:', err);
                } else {
                    console.log('JSON file updated successfully!');
                }
            });

        } catch (parseErr) {
            console.error('Error parsing the JSON file:', parseErr);
        }
    });
}

// Run the function
modifyJsonFile();
