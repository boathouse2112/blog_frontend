import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { getPosts } from '../api/posts';
import { Post } from '../api/types';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

const Home = () => {
  const params = useParams();
  const page = parseInt(params.page ?? '1', 10);

  const { data: getPostsData } = useQuery(['get-posts', page], () =>
    getPosts(page)
  );

  const renderPosts = (posts: Post[]) =>
    posts.map((post: any) => {
      return <PostPreview key={post.id} post={post} />;
    });

  const renderPageNav = (numberOfPages: number) => {
    const previousPageExists = page > 1;
    const nextPageExists = page < numberOfPages;

    return (
      <nav>
        {previousPageExists ? (
          <Link to={`/page/${page - 1}`}>Older</Link>
        ) : undefined}

        <Link to={'/page/1'}>Page 1</Link>
        <Link to={`/page/${numberOfPages}`}>Page {numberOfPages}</Link>

        {nextPageExists ? (
          <Link to={`/page/${page + 1}`}>Newer</Link>
        ) : undefined}
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
            {renderPageNav(getPostsData.numberOfPages)}
          </>
        ) : undefined}
      </main>
    </>
  );
};

export default Home;
