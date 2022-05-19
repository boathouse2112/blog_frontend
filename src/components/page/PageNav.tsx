import { Link } from 'react-router-dom';

const PageNav = (props: {
  page: number;
  numberOfPages: number;
  pathPrefix?: string;
}) => {
  const pathPrefix =
    props.pathPrefix !== undefined ? '/' + props.pathPrefix : '';
  const { page, numberOfPages } = props;

  const previousPageExists = page > 1;
  const nextPageExists = page < numberOfPages;

  return (
    <nav>
      {previousPageExists ? (
        <Link to={`${pathPrefix}/page/${page - 1}`}>Newer</Link>
      ) : undefined}

      <Link to={`${pathPrefix}/page/`}>Page 1</Link>
      <Link to={`${pathPrefix}/page/${numberOfPages}`}>
        Page {numberOfPages}
      </Link>

      {nextPageExists ? (
        <Link to={`${pathPrefix}/page/${page + 1}`}>Older</Link>
      ) : undefined}
    </nav>
  );
};

export default PageNav;
