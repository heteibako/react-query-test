import React from 'react';
import { usePosts } from '../hooks';
import { List, ListItem } from './styled/List';
import { useDeleteUser } from '../hooks';

const Users = () => {
  const posts = usePosts();
  const mutation = useDeleteUser();
  const handleDelete = (e) => {
    console.log(e.target.id);
    mutation.mutate(e.target.id);
  };
  const { isLoading, isError, error, data } = posts;
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <List>
      {Array.isArray(data) && data.length === 0
        ? 'No users in the list'
        : data.map((post) => (
            <ListItem id={post._id} onClick={handleDelete} key={post._id}>
              {post.name}
            </ListItem>
          ))}
    </List>
  );
};

export default Users;
