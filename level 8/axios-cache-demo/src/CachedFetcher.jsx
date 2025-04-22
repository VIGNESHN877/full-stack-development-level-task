import React from 'react';
import useAxios from './hooks/useAxios';

function CachedFetcher() {
  const {
    data,
    loading,
    error,
    forceRefresh,
  } = useAxios('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <h1>Cached Axios Fetch</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && (
        <ul>
          {data.slice(0, 5).map(post => (
            <li key={post.id}><strong>{post.title}</strong></li>
          ))}
        </ul>
      )}

      <button onClick={forceRefresh} style={{ marginTop: '10px' }}>
        Force Refresh
      </button>
    </div>
  );
}

export default CachedFetcher;
