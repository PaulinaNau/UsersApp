import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { GLobalStyle } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/themes';
import { Wrapper } from './Root.styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormAddUser from 'components/organisms/FormAddUser/FormAddUser';
import { useState } from 'react';
import { users as usersData } from 'data/UsersData';
//import { StyledTitle } from 'components/atoms/Title.styles';
import MainTemplate from 'components/templates/Navigation/MainTemplate';

const initialState = {
  name: '',
  attendance: '',
  average: '',
};

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValue, setFormValue] = useState(initialState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    console.log(filteredUsers);
    setUsers(filteredUsers);
  };

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValue.name,
      attendance: formValue.attendance,
      average: formValue.average,
    };

    setUsers([newUser, ...users]);

    setFormValue({
      name: '',
      attendance: '',
      average: '',
    });
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GLobalStyle />
        <MainTemplate>
          <UsersContext.Provider
            value={{
              users,
              handleAddUser,
              deleteUser,
            }}
          >
            <Wrapper>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={<UsersList deleteUser={deleteUser} users={users} />}
                />
                <Route
                  path="/add-user"
                  element={
                    <FormAddUser
                      formValue={formValue}
                      handleAddUser={handleAddUser}
                      handleChange={handleChange}
                    />
                  }
                />
              </Routes>
            </Wrapper>
          </UsersContext.Provider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
