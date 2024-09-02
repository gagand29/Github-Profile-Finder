import React from 'react';
import UserItem from './UserItem.js'; // Ensure you have this component, or define it below

const Users = (props) => {
  console.log(props.users);

  // CSS style object for the grid layout
  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Corrected spelling and syntax
    gap: '1rem', // Corrected property name from gridFap to gap
  };

  return (
    <div style={userStyle}>
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} /> // Correctly closed the component and added the key
      ))}
    </div>
  );
};

export default Users;
