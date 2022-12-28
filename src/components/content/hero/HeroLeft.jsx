import React from 'react';

const HeroLeft = () => {
  return (
    <div className="basis-1/2 px-8 lg:px-20">
      <div className="my-20">
        <h1 className="text-4xl font-bold">
          Wplms. Social. University
        </h1>
        <p className="mt-5 mb-10">
          Join over 20,000 university and startups
        </p>
        <button
          type="button"
          className="text-white bg-amber-500 hover:bg-amber-400 transition duration-200 ease-in-out font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default HeroLeft;
