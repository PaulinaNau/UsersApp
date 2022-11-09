import styled from "styled-components";

export const Button = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  border: 1px solid ${({theme}) => theme.colors.black};
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: -5px 5px ${({theme}) => theme.colors.success};
  margin: 30px;
  border-radius: 25px;
  color: ${({theme}) => theme.colors.black};
  transition: border 0.4s ease-in-out, background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out, color 0.4s ease-in-out;
  &:hover {
      border: none;
      background-color: ${({theme}) => theme.colors.success};
      box-shadow: none;
      color: ${({theme}) => theme.colors.white};
    }

`;