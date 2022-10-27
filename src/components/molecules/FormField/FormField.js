import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label.styles';
import { Input } from 'components/atoms/Input.styles';
import { Wrapper } from './FormFields.styles';

const FormField = ({ label, name, id, type = 'text' }) => {
  return (
    <>
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input name={name} id={id} type={type} />
      </Wrapper>
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
