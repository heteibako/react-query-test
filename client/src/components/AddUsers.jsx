import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

export const AddUsers = () => {
  const URL = 'http://localhost:5000/api/v1/user';
  const mutation = useMutation((newUser) => axios.post(URL, newUser));
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
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className='ring-2 ring-red-300 bg-red-600 rounded-sm px-3 py-1 text-red-50'>
          Add name
        </button>
      </form>
    </>
  );
};
