import React from 'react';

const RepoList = ({ repos }) => {
  return (
    <div className="mt-6">
      <h4 className="text-xl font-semibold">Repositories:</h4>
      {repos.length > 0 ? (
        <ul className="list-disc pl-5">
          {repos.map((repo) => (
            <li key={repo.id} className="mt-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No repositories available.</p>
      )}
    </div>
  );
};

export default RepoList;
