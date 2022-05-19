import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getYear } from '../../api/page';
import Page from './Page';

const useYear = (year: number | undefined, page: number) =>
  useQuery(['get-year', year, page], () =>
    year !== undefined ? getYear(year, page) : undefined
  );

const Year = () => {
  const params = useParams();

  const page = parseInt(params.page ?? '1', 10);
  const year =
    params.year !== undefined ? parseInt(params.year, 10) : undefined;

  const { data: pageData } = useYear(year, page);

  return (
    <>
      {pageData ? (
        <Page page={page} pageData={pageData} pathPrefix={year?.toString()} />
      ) : undefined}
    </>
  );
};

export default Year;
