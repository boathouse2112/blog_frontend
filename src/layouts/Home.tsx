import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/posts';
import { Post } from '../api/types';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

type HomeProps = {
  title?: string;
  articles: { title: string; body: string }[];
};

const page = 1;

const Home = (props: HomeProps) => {
  const { data: getPostsData } = useQuery(['get-posts', page], () =>
    getPosts(page)
  );

  const renderPosts = (posts: Post[]) =>
    posts.map((post: any) => {
      return <PostPreview key={post.id} post={post} />;
    });

  const renderPageNav = (links: {
    previousPage?: string;
    nextPage?: string;
  }) => {
    const { previousPage, nextPage } = links;

    return (
      <nav>
        {previousPage ? <Link to={previousPage}>Older</Link> : undefined}
        {nextPage ? <Link to={nextPage}>Newer</Link> : undefined}
      </nav>
    );
  };

  return (
    <>
      <Header />
      <main className="mx-4">
        {getPostsData ? (
          <>
            {renderPosts(getPostsData.posts)}
            {renderPageNav(getPostsData._links)}
          </>
        ) : undefined}
      </main>
    </>
  );
};

export type { HomeProps };

export default Home;
