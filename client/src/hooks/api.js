import axios from 'axios';
import { useQuery } from 'react-query';

export const usePosts = () => {
  return useQuery('user', () => axios.get('http://localhost:5000/api/v1/user/').then((res) => res.data));
};
