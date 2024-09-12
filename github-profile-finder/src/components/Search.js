// Search.js
import React, { useState } from 'react';

const Search = (props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('text value', text);
    props.searchName(text);
    setText('');
  };

  
  const handleClear = () => {
    setText(''); 
    props.clearUsers(); 
  };

  return (
    <div className="mt-4">
      {/* Form only contains the input field */}
      <form className="flex items-center justify-between" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0" // Set width to full
        />
      </form>

      {/* Search Button, placed outside the form */}
      <button
        onClick={handleSubmit}
        className="mt-2 w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-0"
      >
        Search
      </button>

      {/* Clear Button */}
      {props.showClear() && (
        <button
          onClick={handleClear} 
          className="mt-2 w-full p-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-0"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
