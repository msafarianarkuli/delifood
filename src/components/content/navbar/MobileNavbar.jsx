import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import menuList from '../../../services/data/menuList';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#b3d0ff',
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const MobileNavbar = ({ mode, onClose }) => {
  return (
    <Transition in={mode} timeout={30}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div
            className={`h-screen fixed top-0 right-0 shadow-lg bg-white z-40 p-4 ${
              mode
                ? 'w-[300px] transition-all duration-200 ease-in-out'
                : 'w-0 transition-all duration-200 ease-in-out'
            }`}
          >
            <div className="flex justify-between items-center">
              <FaTimes className="cursor-pointer" onClick={onClose} />
            </div>
            <div className="my-5">
              <nav>
                <ul className="space-y-6 text-lg">
                  {menuList.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className="flex items-center"
                        onClick={onClose}
                      >
                        {item.icon}
                        <span className="ml-4">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default MobileNavbar;
