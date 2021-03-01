import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Users from './components/Users';
import { AddUsers } from './components/AddUsers';
import { Wrapper } from './components/styled/Wrapper';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper md>
        <h1>User adder</h1>

        <Users />
        <AddUsers />
      </Wrapper>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
