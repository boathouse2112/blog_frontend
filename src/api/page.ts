import axios from 'axios';
import { PageResponse, PageResponseSchema } from './types';

const API_URL = 'http://localhost:8080';

/**
 * Get page data from the api endpoint at the given URL
 */
const getPageUrl = async (page: number, url: string): Promise<PageResponse> => {
  console.log(url);
  return axios({
    method: 'get',
    url: url,
  }).then((res) => {
    console.log(res.data);
    // Check whether the call succeeded or not.
    const postsResponse = PageResponseSchema.parse(res.data);
    return postsResponse;
  });
};

// Gets the posts on the given page
const getPage = async (page: number): Promise<PageResponse> => {
  const url = `${API_URL}/posts/page/${page}`;
  return getPageUrl(page, url);
};

// Gets the posts on the given page
const getYear = async (year: number, page: number): Promise<PageResponse> => {
  const url = `${API_URL}/posts/year/${year}/page/${page}`;
  return getPageUrl(page, url);
};

export { getPage, getYear };
