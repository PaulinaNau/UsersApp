
import React, { useState, useContext } from 'react';
import { Wrapper } from '../UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { StyledTitle } from 'components/atoms/Title.styles';
import { Button } from 'components/atoms/Button/Button';
import { UsersContext } from 'views/Root';


const FormAddUser = ({ handleAddUser, formValue, handleChange }) => {

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new user</StyledTitle>
        <FormField
          label="Name"
          name="name"
          id="name"
          type="text"
          value={formValue.name}
          onChange={handleChange}
        />
        <FormField
          label="Attendance"
          name="attendance"
          id="Attendance"
          type="text"
          value={formValue.attendance}
          onChange={handleChange}
        />
        <FormField label="Average" name="average" id="Average" type="text" value={formValue.average}
          onChange={handleChange}/>
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

export default FormAddUser;
