// FetchComponent.js
import React from 'react';
import useFetch from './useFetch';

function FetchComponent() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>📦 Fetched Posts</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {data && data.slice(0, 5).map((post) => (
        <div key={post.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchComponent;
