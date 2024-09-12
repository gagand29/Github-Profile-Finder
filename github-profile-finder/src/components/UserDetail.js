import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import RepoList from './RepoList'; // Import the RepoList component

const UserDetail = ({ getDetails, getRepo, user, repos }) => {
  const { login } = useParams();

  useEffect(() => {
    if (login) {
      getDetails(login);
      getRepo(login);
    }
  }, [login, getDetails, getRepo]);

  return (
    <div className="p-4">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Search
      </Link>

      {/* Display User Details */}
      <div className="flex items-start space-x-6">
        <img
          src={user?.avatar_url || 'https://via.placeholder.com/150'}
          alt={user?.login || 'User Avatar'}
          className="w-32 h-32 rounded-full"
        />
        <div>
          <h3 className="text-2xl font-bold">{user?.name || user?.login || 'Unknown User'}</h3>
          <p className="text-gray-600">{user?.bio || 'No bio available.'}</p>
          <p className="mt-2">
            <strong>Location:</strong> {user?.location || 'Location not specified.'}
          </p>
          <p className="mt-2">
            <strong>Blog:</strong>{' '}
            {user?.blog ? (
              <a
                href={user.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {user.blog}
              </a>
            ) : (
              'No blog available.'
            )}
          </p>
          <p className="mt-2 flex items-center">
            <strong>Hireable:</strong>{' '}
            {user?.hireable ? (
              <FaCheckCircle className="text-green-500 ml-2" />
            ) : (
              <FaTimesCircle className="text-red-500 ml-2" />
            )}
          </p>
          {/* View GitHub Profile Button */}
          {user?.html_url && (
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              View GitHub Profile
            </a>
          )}
        </div>
      </div>

      {/* Use RepoList to Display Repositories */}
      <RepoList repos={repos} />
    </div>
  );
};

export default UserDetail;
