import { useState } from 'react';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <header className="mt-8 mb-12">
        <div className="flex justify-between items-center">
          {/* Use shrink-0 divs to keep the padding and allow for a hamburger menu */}
          <div className="flex-shrink-0 self-end w-20">
            <div
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
              className="w-8 h-10 ml-6 mr-6 cursor-pointer flex items-end"
            >
              <div
                className={[
                  'w-full h-[12px] relative',
                  'border-t-2 border-b-2 border-gray-900',
                  'before:content-[""] before:w-full before:absolute before:left-0 before:bottom-[18px]',
                  'before:border-t-2 before:border-gray-900',
                ].join(' ')}
              ></div>
            </div>
          </div>
          <h1 className="text-center text-2xl font-light tracking-wide">
            MARK MURPHY'S BLOG
          </h1>
          <div className="flex-shrink-0 w-20"></div>
        </div>
        {hamburgerOpen ? (
          <nav className="my-3 py-2 bg-gray-800 flex justify-center gap-3 divide-x text-lg font-light text-white text-center">
            <div className="w-1/3 pl-7 pr-3">
              <a href="/">Archive</a>
            </div>
            <div className="pl-3 w-1/3">
              <a href="/">Categories</a>
            </div>
            <div className="pl-4 pr-6 w-1/3">
              <a href="/">Tags</a>
            </div>
          </nav>
        ) : undefined}
      </header>
    </>
  );
};

export default Header;
