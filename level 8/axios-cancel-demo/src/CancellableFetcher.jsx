// CancellableFetcher.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CancellableFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController(); // Create a controller
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          { signal: controller.signal }
        );
        setData(response.data.slice(0, 5));
        setError('');
      } catch (err) {
        if (axios.isCancel(err) || err.name === 'CanceledError') {
          console.log('Request cancelled:', err.message);
        } else {
          console.error('Fetch error:', err);
          setError('Something went wrong while fetching data.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      controller.abort(); // Cancels the request
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CancellableFetcher;
