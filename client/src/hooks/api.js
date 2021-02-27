import axios from 'axios';
import { useQuery } from 'react-query';

const usePosts = () => {
  return useQuery('posts', () => axios.get('http://localhost:5000/api/v1/user/').then((res) => res.data));
};

export default usePosts;
