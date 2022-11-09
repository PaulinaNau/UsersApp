import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './FormFields.styles';

const FormField = ({ label, name, id, type = 'text', value, onChange }) => {
  return (
    <>
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input name={name} id={id} type={type} value={value} onChange={onChange}/>
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
