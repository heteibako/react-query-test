import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

export const AddUsers = () => {
  const URL = 'http://localhost:5000/api/v1/user';
  const mutation = useMutation((newUser) => axios.post(URL, newUser));
  const [name, setName] = useState('');
  return (
    <form
      onSubmit={() => {
        mutation.mutate({ name });
      }}>
      <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <button type='submit'>Add name</button>
    </form>
  );
};
