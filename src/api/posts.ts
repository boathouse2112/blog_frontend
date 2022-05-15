import axios from 'axios';
import { GetPostsData, GetPostsResponseSchema } from './types';

const API_URL = 'http://localhost:8080';

// Gets the posts on the given page
const getPosts = async (page: number): Promise<GetPostsData> => {
  console.log('page: ', page);
  return axios({
    method: 'get',
    url: `${API_URL}/page/${page}`,
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
