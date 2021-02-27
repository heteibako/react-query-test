import React from 'react';
import usePosts from '../hooks/api';

export const AnotherComponent = () => {
  const posts = usePosts();
  return <div>{console.log(posts)}</div>;
};
