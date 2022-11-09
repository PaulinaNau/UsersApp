import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  padding: 50px 0 0 100px;

  `;

// const activeClassName = 'active-link';

export const StyledLink = styled(NavLink)`
text-decoration: none;
font-size: ${({ theme }) => theme.fontSize.l}
color: ${({ theme }) => theme.colors.grey};
font-weight: bold;
&.active-link {
  color: ${({ theme }) => theme.colors.success};
}
`;
