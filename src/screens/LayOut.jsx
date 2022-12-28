import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const LayOut = () => {
  return (
    <div className="xl:container mx-auto overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayOut;
