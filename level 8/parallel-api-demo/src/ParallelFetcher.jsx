// ParallelFetcher.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ParallelFetcher() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMultipleData = async () => {
      setLoading(true);
      try {
        // Two parallel API requests
        const [postsResponse, usersResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts'),
          axios.get('https://jsonplaceholder.typicode.com/users'),
        ]);

        setPosts(postsResponse.data.slice(0, 5)); // Take only first 5 posts
        setUsers(usersResponse.data.slice(0, 5)); // Take only first 5 users
        setError('');
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load one or more resources.');
      } finally {
        setLoading(false);
      }
    };

    fetchMultipleData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParallelFetcher;
