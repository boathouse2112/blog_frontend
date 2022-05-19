import { Post } from '../../api/types';
import PostPreview from './PostPreview';

const PostList = (props: { posts: Post[] }) => {
  const renderPosts = () =>
    props.posts.map((post: any) => <PostPreview key={post.id} post={post} />);

  return <>{renderPosts()}</>;
};

export default PostList;
