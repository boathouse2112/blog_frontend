import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Post from '../Post';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page/" element={<Navigate replace to="/" />} />
            <Route path="/page/1" element={<Navigate replace to="/" />} />
            <Route path="/page/:page" element={<Home />} />
            <Route path="/:year/" element={<Post />} />
            <Route path="/:year/:month" element={<Post />} />
            <Route path="/:year/:month/:day" element={<Post />} />
            <Route path="/:year/:month/:day/:slug" element={<Post />} />
            <Route path="*" element={<Post />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
