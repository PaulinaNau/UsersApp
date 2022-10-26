import UsersList from 'components/organisms/UsersList/UsersList';
import { GLobalStyle } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/themes';
import { Wrapper } from './Root.styled';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GLobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
