import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './data';

const Home = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.shortDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;