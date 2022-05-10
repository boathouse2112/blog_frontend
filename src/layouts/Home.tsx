import { useQuery } from 'react-query';
import { getPosts } from '../api/posts';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

type HomeProps = {
  title?: string;
  articles: { title: string; body: string }[];
};

const page = 1;

const Home = (props: HomeProps) => {
  const { isLoading, error, data } = useQuery(['get-posts', page], () =>
    getPosts(page)
  );

  return (
    <>
      <Header />
      {isLoading ? undefined : (
        <main className="mx-4">
          {data.posts.map((post: any) => (
            <PostPreview key={post.id} title={post.title} body={post.body} />
          ))}
        </main>
      )}
    </>
  );
};

export type { HomeProps };

export default Home;
