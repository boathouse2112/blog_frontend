import { PageResponse } from '../../api/types';
import Header from '../../components/Header';
import PageNav from '../../components/page/PageNav';
import PageNotFound from '../../components/page/PageNotFound';
import PostList from '../../components/page/PostList';

const Page = (props: {
  page: number;
  pageData: PageResponse;
  pathPrefix?: string;
}) => {
  const pageData = props.pageData;

  const renderPage = () => {
    if (!!pageData) {
      if (pageData.status === 'failure' || pageData.status === 'error') {
        return <PageNotFound />;
      }
      if (pageData.status === 'success') {
        return (
          <>
            <PostList posts={pageData.data.posts} />
            <PageNav
              page={props.page}
              numberOfPages={pageData.data.numberOfPages}
            />
          </>
        );
      }
    }
  };

  return (
    <>
      <Header />
      <main className="mx-4">{renderPage()}</main>
    </>
  );
};

export default Page;
