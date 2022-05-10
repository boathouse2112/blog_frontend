import dayjs from 'dayjs';
import { z, ZodObject, ZodRawShape } from 'zod';

const JSONResponseStatusSchema = z.union([
  z.literal('success'),
  z.literal('failure'),
  z.literal('error'),
]);
type JSONResponseStatus = z.infer<typeof JSONResponseStatusSchema>;

/**
 * Create a schema for a JSON response with the given data.
 * @param data Schema of the data in this JSON response
 */
const createJSONResponseSchema = <T extends ZodRawShape>(data: ZodObject<T>) =>
  // Multiple cases depending on response status
  z.union([
    // 'success' case - require data as normal.
    z.object({
      status: z.literal('success'),
      data,
    }),
    // 'failure' and 'error' cases - accept an error message
    z.object({
      status: z.union([z.literal('failure'), z.literal('error')]),
      message: z.string(),
    }),
  ]);

/**
 * Schema for post data, used to render a post and its preview.
 */
const PostSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  body: z.string(),
  // Created must be a valid date string
  created: z
    .string()
    .refine((s) => dayjs(s).isValid())
    .transform((s) => dayjs(s)),
  previousPost: z
    .object({
      title: z.string(),
      URL: z.string(),
    })
    .optional(),
  nextPost: z
    .object({
      title: z.string(),
      URL: z.string(),
    })
    .optional(),
});
type Post = z.infer<typeof PostSchema>;

/**
 * Schema of the getPosts response data, including an array of Post,
 * and links to the previous and next page of posts, if they exist.
 */
const GetPostsDataSchema = z.object({
  _links: z.object({
    previousPage: z.string().optional(),
    nextPage: z.string().optional(),
  }),
  posts: PostSchema.array(),
});
type GetPostsData = z.infer<typeof GetPostsDataSchema>;

/**
 * Schema of a JSONResponse for getPosts
 */
const GetPostsResponseSchema = createJSONResponseSchema(GetPostsDataSchema);
type GetPostsResponse = z.infer<typeof GetPostsResponseSchema>;

export type { JSONResponseStatus, Post, GetPostsData, GetPostsResponse };
export { PostSchema, GetPostsDataSchema, GetPostsResponseSchema };
