import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './data';

const Post = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>404: Post Not Found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;