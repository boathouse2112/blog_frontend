import axios from 'axios';
import { GetPostsData, GetPostsResponseSchema } from './types';

const API_URL = 'http://localhost:8080';

const POSTS_PER_PAGE = 5;

// Gets the posts on the given page
const getPosts = async (page: number): Promise<GetPostsData> => {
  console.log('post');
  const start = (page - 1) * POSTS_PER_PAGE;
  const limit = POSTS_PER_PAGE;

  return axios({
    method: 'get',
    url: `${API_URL}/posts`,
    params: {
      start,
      limit,
    },
  }).then((res) => {
    console.log(res.data);
    // Check whether the call succeeded or not.
    const postsResponse = GetPostsResponseSchema.parse(res.data);
    if (postsResponse.status !== 'success') {
      throw Error(postsResponse.message);
    } else {
      return postsResponse.data;
    }
  });
};

export { getPosts };
