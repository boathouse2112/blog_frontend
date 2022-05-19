import dayjs from 'dayjs';
import { z, ZodObject, ZodRawShape } from 'zod';

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
      data: data,
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
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  body: z.string(),
  // Created must be a valid date string
  created: z
    .string()
    .refine((s) => dayjs(s).isValid())
    .transform((s) => dayjs(s)),
});
type Post = z.infer<typeof PostSchema>;

/**
 * Includes previous and next posts.
 */
const PostDataSchema = z.intersection(
  PostSchema,
  z.object({
    previousPost: PostSchema.optional(),
    nextPost: PostSchema.optional(),
  })
);
type PostData = z.infer<typeof PostDataSchema>;

/**
 * Schema of the getPosts response data, including an array of Post,
 * and links to the previous and next page of posts, if they exist.
 */
const PageDataSchema = z.object({
  numberOfPages: z.number(),
  posts: PostDataSchema.array(),
});
type PageData = z.infer<typeof PageDataSchema>;

/**
 * Schema of a JSONResponse for getPosts
 */
const PageResponseSchema = createJSONResponseSchema(PageDataSchema);
type PageResponse = z.infer<typeof PageResponseSchema>;

export type { Post, PostData, PageData, PageResponse };
export { PostSchema, PageDataSchema, PageResponseSchema };
