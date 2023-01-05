import styled from 'styled-components';

export const StyledHomeTitle = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: 50px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;


export const StyledTitle = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
export const ErrorText = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
