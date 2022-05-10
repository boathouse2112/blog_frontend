import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home, { HomeProps } from '../Home';
import Post from '../Post';

const HOME_PROPS: HomeProps = {
  articles: [
    {
      title: 'Lorem ipsum dolor sit amet',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco labois nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
        'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
};

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="font-sans">
          <Routes>
            <Route path="/" element={<Home {...HOME_PROPS} />} />
            <Route path="/page/1" element={<Navigate replace to="/" />} />
            <Route path="/page/:page" element={<Home {...HOME_PROPS} />} />
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
