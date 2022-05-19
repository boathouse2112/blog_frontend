import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getPage } from '../../api/page';
import Page from './Page';

const Home = () => {
  const params = useParams();
  const page = parseInt(params.page ?? '1', 10);

  const { data: pageData } = useQuery(['get-posts', page], () => getPage(page));

  return <>{pageData ? <Page page={page} pageData={pageData} /> : undefined}</>;
};

export default Home;
