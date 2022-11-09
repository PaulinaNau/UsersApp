import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import { StyledUsersList } from './UsersList.styles';
// import { useEffect, useState } from 'react';
// import { users as usersData } from 'data/UsersData';
import { StyledTitle } from 'components/atoms/Title.styles';

const UsersList = ({users, deleteUser}) => {
  // const [users, setUsers] = useState(usersData);
  // const [isLoading, setLoadingState] = useState([]);
  // const mockAPI = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (usersData) {
  //         resolve([...usersData]);
  //       } else {
  //         reject({ message: 'Error' });
  //       }
  //     }, 2000);
  //   });
  // };

  // useEffect(() => {
  //   setLoadingState(true);
  //   mockAPI()
  //     .then((data) => {
  //       setLoadingState(false);
  //       setUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Wrapper>
      {/* <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle> */}
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
      </Wrapper>
    </>
  );
};

export default UsersList;
