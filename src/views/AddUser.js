import React, { useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { StyledTitle, ErrorText } from 'components/atoms/Title.styles';
import { UsersContext } from 'providers/UsersProvider';
import { Label } from 'components/atoms/Label/Label';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

 const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE INPUT CHANGE':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'CONSENT TOGGLE':
      return {
        ...state,
        consent: !state.consent,
      };
    case 'THROW ERROR':
      return {
        ...state,
        error: action.errorValue,
      };
    case 'CLEAR VALUES':
      return initialFormState;
    default:
        return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);


  const handleInputChange = (e) => {
   dispatch({
    type: 'HANDLE INPUT CHANGE',
    field: e.target.name,
    value: e.target.value,
   });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
   if (formValues.consent) {
    handleAddUser(formValues);
    dispatch({ type: "CLEAR VALUES" });
   } else {
    dispatch({ type: "THROW ERROR", errorValue: 'You need to give consent' });
   }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <input  name="Zgoda" type="checkbox" onChange={() => dispatch({ type: 'CONSENT TOGGLE' })}/>
      <Label htmlFor="Zgoda">I accept the terms and conditions</Label>
      {formValues.error ? <ErrorText>{formValues.error}</ErrorText> : null }
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};


export default AddUser;
