import React from 'react';
import { NavWrapper, StyledLink } from './Natigation.styles';

const Navigation = () => {
  return (
    <>
      <NavWrapper>
        <StyledLink activeClassName="active-link" exact to="/">Dashboard</StyledLink>
        <StyledLink activeClassName="active-link" to="/add-user">Settings</StyledLink>
      </NavWrapper>
    </>
  );
};

export default Navigation;
