import React from 'react';
import logo from '../../assets/images/favicon.ico';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DesktopNav = ({ openModal, openNav }) => {
  return (
    <nav className="px-8 lg:px-20 py-2.5">
      <div className="flex items-center justify-between mx-auto">
        <div>
          <Link to="/">
            <img src={logo} className="" alt=" Logo" />
          </Link>
        </div>
        <div className="md:hidden flex md:order-2">
          <button
            type="button"
            onClick={openModal}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-0.5 text-center "
          >
            Login
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={openNav}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="not-built"
                className="py-2 pl-3 pr-4 md:p-0 hover:text-blue-400 transition duration-200 ease-in-out"
              >
                CATEGORIES
              </Link>
            </li>
            <li>
              <Link
                to="not-built"
                className="py-2 pl-3 pr-4 md:p-0 hover:text-blue-400 transition duration-200 ease-in-out"
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="not-built"
                className="py-2 pl-3 pr-4 md:p-0 hover:text-blue-400 transition duration-200 ease-in-out"
              >
                WHY WPLMS?
              </Link>
            </li>
            <li>
              <Link
                to="not-built"
                className="py-2 pl-3 pr-4 md:p-0 hover:text-blue-400 transition duration-200 ease-in-out"
              >
                SHOP
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="py-2 pl-3 pr-4 md:p-0 hover:text-blue-400 transition duration-200 ease-in-out"
              >
                <FaSearch size="18" className="text-gray-700" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto hidden md:block md:order-1">
          <ul className="flex p-4 mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li onClick={openModal}>
              <a
                href="#"
                className="py-2 pl-3 pr-4 md:p-0 hover:text-blue-400 transition duration-200 ease-in-out"
              >
                LOGIN
              </a>
            </li>
            <li>
              <Link
                to="not-built"
                className="py-2 pl-3 pr-4 md:p-0 hover:text-blue-400 transition duration-200 ease-in-out"
              >
                <FaShoppingCart size={22} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
