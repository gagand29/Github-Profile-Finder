// UserItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  // Access the user object from props
  const { login, avatar_url } = props.user;

  // Render the user details with Tailwind CSS classes
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center transition-transform hover:scale-105">
      <img
        src={avatar_url}
        alt={login}
        className="w-16 h-16 rounded-full mx-auto mb-3"
      />
      <h3 className="text-lg font-semibold mb-2">{login}</h3>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-600"
      >
        More
      </Link>
    </div>
  );
};

export default UserItem;
