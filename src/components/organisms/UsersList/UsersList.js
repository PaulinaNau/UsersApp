import { useState, useEffect } from 'react';
import { users as usersData } from 'data/UsersData';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import { StyledUsersList } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { StyledTitle } from 'components/atoms/Title.styles';

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

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Wrapper>
        <StyledTitle>Add new user</StyledTitle>
        <FormField label="Name" name="name" id="name" type="text" />
        <FormField label="Attendance" name="Attendance" id="Attendance" type="text" />
        <FormField label="Average" name="Average" id="Average" type="text" />
      </Wrapper>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle>
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
