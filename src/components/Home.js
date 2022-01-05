import React from 'react';
import styled from 'styled-components';
import Landing from './Landing';
import AboutMe from './AboutMe';

const Home = () => {
  return (
    <Container>
      <Landing />
      <AboutMe />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`

