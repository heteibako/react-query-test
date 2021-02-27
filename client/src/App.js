import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Users from './components/Users';
import { AddUsers } from './components/AddUsers';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Test</h1>
      <div class='container mx-auto p-4 shadow-lg rounded-md'>
        <Users />
        <AddUsers />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
