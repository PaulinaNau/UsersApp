import React from 'react';
import { NavWrapper, StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <>
      <NavWrapper>
        <StyledLink exact to="/">Dashboard</StyledLink>
        <StyledLink to="/add-user">Settings</StyledLink>
      </NavWrapper>
    </>
  );
};

export default Navigation;
