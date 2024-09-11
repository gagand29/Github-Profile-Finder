import React from 'react';
import UserItem from './UserItem.js'; 

const Users = (props) => {
  console.log(props.users);

  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '1rem', 
  };

  return (
    <div style={userStyle}>
      {props.users.map((user) => (
        <UserItem user={user}/>
      ))}
    </div>
  );
};

export default Users;
