// DebouncedSearch.js
import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000); // 1 second delay

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('📡 Searching for:', debouncedSearchTerm);
      // Simulate API call or filtering logic here
    }
  }, [debouncedSearchTerm]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🔍 Debounced Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
        style={{ padding: '10px', width: '250px', fontSize: '16px' }}
      />
      <p style={{ marginTop: '20px' }}>
        Actual value: <strong>{searchTerm}</strong><br />
        Debounced value (after delay): <strong>{debouncedSearchTerm}</strong>
      </p>
    </div>
  );
}

export default DebouncedSearch;
