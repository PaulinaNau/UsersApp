import React from 'react';
import { NavWrapper, StyledLink, Logo } from './Navigation.styles';

const Navigation = () => {
  return (
    <>
      <NavWrapper>
        <Logo exact to="/dashboard">
          Students App
        </Logo>
        <StyledLink exact to="/dashboard">Dashboard</StyledLink>
        <StyledLink to="/add-user">Add new student</StyledLink>
        <StyledLink to="/news">Students News</StyledLink>
      </NavWrapper>
    </>
  );
};

export default Navigation;
