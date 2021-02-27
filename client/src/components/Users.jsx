import React from 'react';
import usePosts from '../hooks/api.js';

const Users = () => {
  const posts = usePosts();

  const { isLoading, isError, error, data } = posts;
  if (isLoading) {
    return <span>Loading...</span>;
  }
  console.log(posts);
  if (isError) {
    return <span>Error: {error}</span>;
  }
  return <div>{Array.isArray(data) && data.map((post) => <li key={post._id}>{post.name}</li>)} </div>;
};

export default Users;
