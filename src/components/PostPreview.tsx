import { Link } from 'react-router-dom';
import { Post } from '../api/types';
import { postURL } from '../util/url';

/**
 * Preview of blog posts for the main page
 */
const PostPreview = (props: { post: Post }) => {
  const { title, body } = props.post;
  return (
    <>
      <div className="my-12">
        <h2 className="mb-5 text-4xl font-light leading-snug underline underline-offset-4 decoration-1">
          {title}
        </h2>
        <div className="text-lg tracking-wide leading-relaxed">
          <p>{body}</p>
          <Link
            to={postURL(props.post)}
            className="underline underline-offset-2 decoration-1"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostPreview;
