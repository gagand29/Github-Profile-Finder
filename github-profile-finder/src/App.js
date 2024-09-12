import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Users from './components/users'; 
import Search from './components/Search';
import UserDetail from './components/UserDetail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const searchName = async (text) => {
    try {
      const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
      setUsers(res.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const showClear = () => {
    return users.length > 0;
  };

  const clearUsers = () => {
    setUsers([]);
  };

  const getDetails = async (login) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${login}`);
      setUser(res.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const getRepo = async (username) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=asc`);
      setRepos(res.data);
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="max-w-[1100px] mx-auto overflow-hidden px-8 py-0 bg-white">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Search searchName={searchName} showClear={showClear} clearUsers={clearUsers} />
                <Users users={users} />
              </>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route 
            path="/users/:login" 
            element={<UserDetail getDetails={getDetails} getRepo={getRepo} user={user} repos={repos} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
