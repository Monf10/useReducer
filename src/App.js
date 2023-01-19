import { QueryClient, QueryClientProvider } from 'react-query'; 
import './App.css';
import Products from './Products';

const queryClient = new QueryClient() 
function App() {
  return (
    <div className='App'>
        <QueryClientProvider client={queryClient}> 
         <Products></Products>
      </QueryClientProvider>
    </div>
    );
   
   
}

export default App;