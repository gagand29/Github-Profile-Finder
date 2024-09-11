import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Users from './components/users'; // Correct casing based on the file name
import Search from './components/Search';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setusers] = useState([]); // State to store GitHub users
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch data from GitHub API
  //       const res = await axios.get('https://api.github.com/users');
  //       console.log(res);
  //       setusers(res.data); 
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData(); // Call the fetchData function to get users
  // }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Router>
      <Navbar />
      <div className="max-w-[1100px] mx-auto overflow-hidden px-8 py-0 bg-white rounded shadow mt-6">
        {/* Container styles using Tailwind */}
        <Search />
        <Users users={users} />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        {/* Display fetched users */}
         
      </div>
    </Router>
  );
}

export default App;
