import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;