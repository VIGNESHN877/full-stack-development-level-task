// DataFetcher.jsx
import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

function DataFetcher() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get('/posts')  // Example API endpoint
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching data.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Fetched Posts:</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
