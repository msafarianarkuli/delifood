import React from 'react';

const NotFound = () => {
  return (
    <div className="w-full flex justify-center items-center px-8">
      <div className="bg-sky-600 rounded-lg inline-block py-10 px-4 md:px-16 mt-40">
        <h1 className="text-white text-lg md:text-3xl">
          There is no page such this name
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
