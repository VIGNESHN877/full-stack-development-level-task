const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Student Model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: Number,
  subjects: [String],
  address: {
    street: String,
    city: String,
    state: String
  },
  status: String
});

const Student = mongoose.model('Student', studentSchema);

// Routes for all tasks

// Task 1: Create students
app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Task 2: Simple queries
app.get('/students/age/:age', async (req, res) => {
  try {
    const students = await Student.find({ age: parseInt(req.params.age) });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/students/grade/:grade', async (req, res) => {
  try {
    const students = await Student.find({ grade: parseInt(req.params.grade) });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/students/name/:prefix', async (req, res) => {
  try {
    const students = await Student.find({ name: new RegExp(`^${req.params.prefix}`, 'i') });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Task 3: Updates
app.patch('/students/:id/age', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: { age: req.body.age } },
      { new: true }
    );
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Task 5: Complex queries
app.get('/students/complex', async (req, res) => {
  try {
    // Example: grade 10 or 11, with math, from Springfield
    const students = await Student.find({
      $or: [{ grade: 10 }, { grade: 11 }],
      subjects: "Mathematics",
      "address.city": "Springfield"
    });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});