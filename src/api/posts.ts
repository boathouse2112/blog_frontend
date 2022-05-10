import axios from 'axios';

const API_URL = 'http://localhost:8080';

const POSTS_PER_PAGE = 5;

// Gets the posts on the given page
const getPosts = async (page: number) => {
  console.log('post');
  const start = (page - 1) * POSTS_PER_PAGE;
  const limit = POSTS_PER_PAGE;

  const posts = await axios({
    method: 'get',
    url: `${API_URL}/posts`,
    params: {
      start,
      limit,
    },
  }).then((res) => {
    if (res.data.status !== 'success') {
      throw Error(res.data.data);
    } else {
      console.log(res.data.data);
      return res.data.data;
    }
  });

  return posts;
};

export { getPosts };
