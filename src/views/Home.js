import React from 'react';
import { StyledHomeTitle } from 'components/atoms/Title.styles';
import { Button } from 'components/atoms/Button/Button';
import { DisplayColumn } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <DisplayColumn>
      <StyledHomeTitle>Welcome<br></br> to Student's App</StyledHomeTitle>
      <Link to="/dashboard"><Button>Go to dashboard</Button></Link>
    </DisplayColumn>
  </>
);


export default Home;
