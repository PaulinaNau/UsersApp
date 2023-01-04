import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 700px;
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  height: 90%;
  overflow-y: scroll;
  scrollbar-width: thin;


  /* scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent; 
    margin: 3px 0px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.darkGrey}; 
    border-radius: 5px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.darkGrey}; 
  }

  @media (max-width: 768px) {
    margin: 10px;
    padding: 10px 20px;
  }

`;