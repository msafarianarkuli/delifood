import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-bottom bg-contain h-auto md:h-[500px] grid grid-cols-1 md:grid-cols-2">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;
