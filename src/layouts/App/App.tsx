import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Page/Home';
import Year from '../Page/Year';
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
            <Route path="/:year/" element={<Year />} />
            <Route path="/:year/page/:page" element={<Year />} />
            <Route path="/:year/:month" element={<Year />} />
            <Route path="/:year/:month/page/:page" element={<Year />} />
            <Route path="/:year/:month/:day" element={<Year />} />
            <Route path="/:year/:month/:day/page/:day" element={<Year />} />
            <Route path="/:year/:month/:day/:slug" element={<Post />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
