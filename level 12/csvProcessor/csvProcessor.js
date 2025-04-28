const fs = require('fs');
const path = require('path');

// File paths
const inputCsvPath = path.join(__dirname, 'data.csv');
const outputResultPath = path.join(__dirname, 'results.txt');

// Function to process CSV
function processCsv() {
    fs.readFile(inputCsvPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading CSV file:', err);
            return;
        }

        try {
            const lines = data.trim().split('\n');
            const headers = lines[0].split(',');

            const students = lines.slice(1).map(line => {
                const values = line.split(',');
                return {
                    name: values[0],
                    math: parseFloat(values[1]),
                    science: parseFloat(values[2]),
                    english: parseFloat(values[3])
                };
            });

            console.log('Parsed Students Data:', students);

            // Calculate averages for each subject
            let totalMath = 0, totalScience = 0, totalEnglish = 0;
            let highestMath = { name: '', score: 0 };
            let lowestMath = { name: '', score: Infinity };

            students.forEach(student => {
                totalMath += student.math;
                totalScience += student.science;
                totalEnglish += student.english;

                if (student.math > highestMath.score) {
                    highestMath = { name: student.name, score: student.math };
                }
                if (student.math < lowestMath.score) {
                    lowestMath = { name: student.name, score: student.math };
                }
            });

            const averageMath = (totalMath / students.length).toFixed(2);
            const averageScience = (totalScience / students.length).toFixed(2);
            const averageEnglish = (totalEnglish / students.length).toFixed(2);

            const resultText = `
CSV File Analysis:
---------------------
Average Math Score: ${averageMath}
Average Science Score: ${averageScience}
Average English Score: ${averageEnglish}

Highest Math Score: ${highestMath.name} (${highestMath.score})
Lowest Math Score: ${lowestMath.name} (${lowestMath.score})
`;

            console.log(resultText);

            // Write the result to a new file
            fs.writeFile(outputResultPath, resultText, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing results file:', err);
                } else {
                    console.log('Results written to', outputResultPath);
                }
            });

        } catch (parseErr) {
            console.error('Error processing CSV data:', parseErr);
        }
    });
}

// Run the function
processCsv();
