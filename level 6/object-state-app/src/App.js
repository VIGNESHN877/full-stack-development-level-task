import React, { useState } from 'react';

function ObjectStateComponent() {
  // Step 1: Initialize useState with an object
  const [user, setUser] = useState({
    name: '',
    age: ''
  });

  // Step 2: Handle change for both name and age
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Manage Object with useState</h2>

      {/* Step 3: Input for name */}
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
        style={{ padding: '8px', marginRight: '10px' }}
      />

      {/* Step 4: Input for age */}
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter your age"
        style={{ padding: '8px' }}
      />

      {/* Step 5: Display the object values */}
      <div style={{ marginTop: '20px' }}>
        <p>Name: <strong>{user.name}</strong></p>
        <p>Age: <strong>{user.age}</strong></p>
      </div>
    </div>
  );
}

export default ObjectStateComponent;
