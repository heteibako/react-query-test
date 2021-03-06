import React, { useState } from 'react';
import { useCreateUser } from '../hooks';
import { Button } from '../components/styled/Button';
export const AddUsers = () => {
  const mutation = useCreateUser();
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name });
    setName('');
  };
  return (
    <>
      {mutation.isLoading ? 'Adding User' : null}
      <form onSubmit={handleSubmit}>
        <input
          className='border-gray-200 border-2 rounded-sm p-1 m-3'
          type='text'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button primary type='submit' className='ring-2 ring-red-300 bg-red-600 rounded-sm px-3 py-1 text-red-50'>
          Add name
        </Button>
      </form>
    </>
  );
};
