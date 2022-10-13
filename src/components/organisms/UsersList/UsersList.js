import React from 'react';
import { users } from 'data/UsersData';

const UsersList = () => (
  <div>
    <ul>
      {users.map((data) => {
        return (
          <li>
            <div>{data.average}</div>
            <div>{data.name}</div>
            <div>{data.attendance}</div>
            <button>X</button>
          </li>
        );
      })}
    </ul>
  </div>
);

export default UsersList;
