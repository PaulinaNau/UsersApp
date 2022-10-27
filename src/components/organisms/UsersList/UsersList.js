import { useState, useEffect } from 'react';
import { users as usersData } from 'data/UsersData';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import { StyledUsersList } from './UsersList.styles';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    console.log(filteredUsers);
    setUsers(filteredUsers);
  };

  // useEffect(() => {
  //   setLoadingState(true);
  //   mockAPI().then((data) => {
  //     setLoadingState(false);
  //     setUsers(data).catch((err) => console.log(err));
  //   });
  // }, []);

  useEffect(() => {
    setLoadingState(true);
    mockAPI().then((data) => {
      setLoadingState(false);
      setUsers(data)
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Wrapper>
        <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
        <StyledUsersList>
          {users.map((userData) => (
            <UsersListItem
              deleteUser={deleteUser}
              userData={userData}
              key={userData.name}
            />
          ))}
        </StyledUsersList>
      </Wrapper>
    </>
  );
};

export default UsersList;
