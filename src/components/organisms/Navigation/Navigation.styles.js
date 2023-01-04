import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const NavWrapper = styled.div`
  width: 40%;
  height: auto;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 20px 50px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
    margin: 0 50px;
  }`;



export const StyledLink = styled(NavLink)`
width: 100%;
text-decoration: none;
font-size: ${({ theme }) => theme.fontSize.l}
color: ${({ theme }) => theme.colors.grey};
font-weight: bold;
margin-bottom: 10px; 
&.active { 
  text-decoration: none;
  color: ${({ theme }) => theme.colors.success};
}

`;

export const Logo = styled(Link)`
font-weight: bold;
color: ${({ theme }) => theme.colors.yellow};
font-size: ${({ theme }) => theme.fontSize.xl};
text-align: center;
margin: 40px 0; 
`;

