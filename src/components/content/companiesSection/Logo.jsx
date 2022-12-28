import React from 'react';

const Logo = ({ logo }) => {
  return (
    <div className="px-10 flex justify-center">
      <img src={logo} className="rounded-full" />
    </div>
  );
};

export default Logo;
