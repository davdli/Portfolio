import React from 'react';
import styled from 'styled-components';
import Landing from './Landing';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Tech from './Tech';
import ContactMe from './ContactMe';
import Footer from './Footer';

const Home = () => {
  return (
    <Container>
      <Landing />
      <AboutMe />
      <Projects />
      <Tech />
      <ContactMe />
      <Footer />
    </Container>
  )
}

export default Home;

const Container = styled.div`
`

