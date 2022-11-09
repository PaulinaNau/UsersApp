import styled from 'styled-components';

export const Input = styled.input`
  width: 80%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 25px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }
`;
