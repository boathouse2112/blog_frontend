import Header from '../components/Header';

const Post = () => {
  return (
    <>
      <Header />
      <main className="mt-12 mx-4">
        <h1 className="my-8 text-6xl font-light leading-tight">
          Lorem ipsum dolor sit amet
        </h1>
        <article className="py-12 border-y-2 border-black">
          <div className="text-lg font-normal leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </main>
      <footer className="mt-4 mb-12 mx-4 font-light">
        <p>May 7, 2022</p>
        <p>
          By{' '}
          <a href="/" className="underline underline-offset-2 decoration-1">
            Mark Murphy
          </a>
        </p>
      </footer>
    </>
  );
};

export default Post;
