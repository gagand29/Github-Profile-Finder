// Search.js
import React,{useState} from 'react';

const Search = () => {
    const [text, setText] = useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('text vlaue', text);

}


  return (
    <form className="flex items-center justify-between mt-4" 
    onSubmit={handleSubmit}>
    
      <input
        type="text"
        name="text"
        placeholder="Search"
        value={text} 
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-0" 
      />
      <button
        type="submit"
        value="search"
        className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-0" 
      >
        Search
      </button>
    </form>
  );
};

export default Search;
