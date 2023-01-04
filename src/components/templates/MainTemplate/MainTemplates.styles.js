import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  
  }
`;

export const ViewTemplate = styled.div`
  width: 80%;
`;
