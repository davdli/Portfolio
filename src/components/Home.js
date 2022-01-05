import React from 'react';
import styled from 'styled-components';
import Landing from './Landing';
import AboutMe from './AboutMe';
import Projects from './Projects';

const Home = () => {
  return (
    <Container>
      <Landing />
      <AboutMe />
      <Projects />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`

