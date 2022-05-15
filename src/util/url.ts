import { Post } from '../api/types';

/**
 * Get the relative URL of the given post.
 */
const postURL = (post: Post) => {
  const dateString = post.created.format('YYYY/MM/DD');
  const slug = post.slug;
  return `${dateString}/${slug}`;
};

export { postURL };
