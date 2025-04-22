import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  // Step 1: Set up state for data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: useEffect to fetch data when component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Fetch Data with useEffect</h2>

      {/* Step 3: Loading State */}
      {loading && <p>Loading...</p>}

      {/* Step 4: Error Handling */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Step 5: Display Data */}
      {data && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default FetchDataComponent;
