// InputComponent.js
import React from 'react';
import useInput from './useInput';

function InputComponent() {
  const inputProps = useInput('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type="text"
        placeholder="Type something..."
        {...inputProps}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p>You typed: <strong>{inputProps.value}</strong></p>
    </div>
  );
}

export default InputComponent;
