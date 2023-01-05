import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/themes';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import UsersProvider from 'providers/UsersProvider';
import NewsSection from 'views/News';
import Home from './Home';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/add-user" element={<AddUser />}></Route>
                <Route path="/news" element={<NewsSection />}></Route>
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
