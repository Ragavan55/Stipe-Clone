import React from 'react';

function content5() {
  return (
    <nav className="bg-transparent px-6 py-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">stripe</div>
      <div className="flex space-x-8 text-white">
        <div className="dropdown relative">
          <button className="dropdown-toggle inline-flex items-center">
            Products
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="dropdown relative">
          <button className="dropdown-toggle inline-flex items-center">
            Solutions
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="dropdown relative">
          <button className="dropdown-toggle inline-flex items-center">
            Developers
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="dropdown relative">
          <button className="dropdown-toggle inline-flex items-center">
            Resources
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <a href="#" className="text-white">Pricing</a>
        <button className="text-white">Sign in</button>
        <button className="bg-white text-purple-500 px-4 py-2 rounded-md">Contact sales</button>
      </div>
    </nav>
  );
};

export default content5;