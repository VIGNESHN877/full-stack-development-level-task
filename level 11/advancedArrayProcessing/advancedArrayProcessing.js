// Step 1: Create an array of student objects
const students = [
    { name: "Alice", age: 22, grades: [85, 90, 78] },
    { name: "Bob", age: 19, grades: [70, 75, 80] },
    { name: "Charlie", age: 23, grades: [88, 92, 85] },
    { name: "David", age: 18, grades: [60, 65, 70] },
  ];
  
  // Step 2: Use map() to get an array of just the names
  const studentNames = students.map(student => student.name);
  
  // Step 3: Use filter() to find students older than 20
  const studentsOlderThan20 = students.filter(student => student.age > 20);
  
  // Step 4: Use reduce() to find the average grade for ALL students
  // First flatten all grades into one big array
  const allGrades = students.flatMap(student => student.grades);
  const averageGradeAllStudents = allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length;
  
  // Step 5: Chain array methods to find the average grade of students older than 20
  const averageGradeOlderThan20 = students
    .filter(student => student.age > 20)
    .flatMap(student => student.grades)
    .reduce((sum, grade, _, arr) => sum + grade / arr.length, 0);
  
  // Step 6: Print all results
  console.log("Student Names:", studentNames);
  console.log("\nStudents Older Than 20:", studentsOlderThan20);
  console.log("\nAverage Grade (All Students):", averageGradeAllStudents.toFixed(2));
  console.log("\nAverage Grade (Students Older Than 20):", averageGradeOlderThan20.toFixed(2));
  