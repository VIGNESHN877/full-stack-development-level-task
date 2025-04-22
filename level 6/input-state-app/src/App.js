import React, { useState } from 'react';

function InputComponent() {
  // Step 1: Initialize state to store input text
  const [text, setText] = useState('');

  // Step 2: Update state whenever input changes
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Real-Time Input Display</h2>

      {/* Step 3: Input field with value and onChange */}
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..." 
        style={{ padding: '8px', width: '200px' }}
      />

      {/* Step 4: Displaying the current input */}
      <p style={{ marginTop: '20px' }}>
        You typed: <strong>{text}</strong>
      </p>
    </div>
  );
}

export default InputComponent;
