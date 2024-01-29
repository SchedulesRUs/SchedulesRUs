import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/user').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
