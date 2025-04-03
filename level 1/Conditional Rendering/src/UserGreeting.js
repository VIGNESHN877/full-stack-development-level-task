import React from 'react';

function UserGreeting({ role, name }) {
  return (
    <div>
      {role === 'Admin' ? (
        <h2>Welcome Administrator VIGNESH</h2>
      ) : role === 'User' ? (
        <h2>Welcome User VIGNESH</h2>
      ) : (
        <h2>Welcome Guest!</h2>
      )}
    </div>
  );
}

export default UserGreeting;