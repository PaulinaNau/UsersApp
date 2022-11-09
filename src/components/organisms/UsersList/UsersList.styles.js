import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  height: 90vh;
  overflow-y: scroll;
  background-color: white;
  margin: 0;
  border-radius: 30px;
  box-shadow: 0 0 5px lightGrey;
  padding: 30px 60px;
  margin: 30px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  
`;

export const StyledUsersList = styled.ul`
  list-style: none;
`;
