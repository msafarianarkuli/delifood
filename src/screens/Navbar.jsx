import React, { useState } from 'react';
import Modal from '../components/content/login/LoginModal';
import DesktopNav from '../components/content/navbar/DesktopNav';
import MobileNavbar from '../components/content/navbar/MobileNavbar';

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);

  const handleOpen = () => {
    console.log('first');
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  const handleNavOpen = () => {
    setMobileMode(true);
  };

  const handleNavClose = () => {
    setMobileMode(false);
  };

  return (
    <>
      <DesktopNav openModal={handleOpen} openNav={handleNavOpen} />

      <MobileNavbar
        mode={mobileMode}
        onOpen={handleNavOpen}
        onClose={handleNavClose}
      />
      <Modal mode={open} closeModal={handleClose} />
    </>
  );
};

export default Navbar;
