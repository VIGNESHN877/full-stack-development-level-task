// LocalStorageComponent.js
import React from 'react';
import useLocalStorage from './useLocalStorage';

function LocalStorageComponent() {
  const [name, setName] = useLocalStorage('username', '');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>👤 Persist Username with localStorage</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p>Hello, <strong>{name || 'Stranger'}</strong>!</p>
    </div>
  );
}

export default LocalStorageComponent;
