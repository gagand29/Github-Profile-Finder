// UserItem.js
import React from 'react';

const UserItem = ({ user }) => {
  // Check if user object is available and contains the expected properties
  if (!user) {
    return <div>Loading...</div>; // Render a fallback if user is undefined
  }

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-200">
      {/* Safely access user properties with optional chaining */}
      <img
        src={user?.avatar_url || 'https://via.placeholder.com/150'} // Fallback to a placeholder image
        alt={user?.login || 'User Avatar'}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-center text-xl font-semibold">{user?.login || 'Unknown User'}</h3>
      <a
        href={user?.html_url || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-center text-blue-500 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserItem;
