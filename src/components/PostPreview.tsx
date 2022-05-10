type PostPreviewProps = {
  title: string;
  body: string;
};

const PostPreview = (props: PostPreviewProps) => {
  return (
    <>
      <h2 className="mb-5 text-4xl font-light leading-snug underline underline-offset-4 decoration-1">
        {props.title}
      </h2>
      <div className="text-lg tracking-wide leading-relaxed">
        <p>{props.body}</p>
        <a
          href="/2022/05/06"
          className="underline underline-offset-2 decoration-1"
        >
          Read more
        </a>
      </div>
    </>
  );
};

export default PostPreview;
