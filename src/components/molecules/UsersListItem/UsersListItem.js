import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverage } from 'components/atoms/Avarage/Average.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo } from './UsersListItem.styles';
import { Wrapper } from './UsersListItem.styles';


const UsersListItem = ({ deleteUser, userData: { average, name, attendance } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
    <DeleteButton onClick={() => deleteUser(name)}>X</DeleteButton>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
