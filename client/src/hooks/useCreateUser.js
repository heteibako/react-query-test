import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation('addUser', (values) => axios.post('http://localhost:5000/api/v1/user/', values), {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });
};
