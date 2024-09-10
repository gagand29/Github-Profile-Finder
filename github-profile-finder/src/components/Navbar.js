import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'; // GitHub icon from react-icons

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold flex items-center space-x-2">
          <FaGithub className="text-white text-3xl" />
          <span>Github Finder</span>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
