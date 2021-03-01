import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation('deleteUser', (id) => axios.delete('http://localhost:5000/api/v1/user/', { data: { id } }), {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
    onError: (error, variables, context) => {
      // Remove optimistic todo from the todos list
      console.log(error, variables, context);
    },
  });
};
