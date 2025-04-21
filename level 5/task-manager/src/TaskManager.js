import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (values, { resetForm }) => {
    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    resetForm();
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={addTask}
      >
        {() => (
          <Form>
            <Field name="title" placeholder="Task Title" required />
            <Field name="description" placeholder="Task Description" required />
            <button type="submit">Add Task</button>
          </Form>
        )}
      </Formik>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTaskCompletion(task.id)} 
            />
            <strong>{task.title}</strong>: {task.description}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;