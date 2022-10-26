import { useState } from 'react';
import { users as usersData} from 'data/UsersData';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import { StyledUsersList } from './UsersList.styles';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter(user => user.name !== name);
    console.log(filteredUsers)
    setUsers(filteredUsers)
   
  };


  return (
    <>
      <Wrapper>
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
