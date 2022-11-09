import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledUsersList } from './UsersList.styles';
import { StyledTitle } from 'components/atoms/Title.styles';

const UsersList = ({users, deleteUser}) => {
 

  return (
    <>
     
      <StyledTitle>Users list</StyledTitle>
        <StyledUsersList>
          {users.map((userData) => (
            <UsersListItem
              deleteUser={deleteUser}
              userData={userData}
              key={userData.name}
            />
          ))}
        </StyledUsersList>
    </>
  );
};

export default UsersList;
