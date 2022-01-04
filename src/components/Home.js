import React from 'react';
import styled from 'styled-components';
import Landing from './Landing';

const Home = () => {
  return (
    <Container>
      <Landing />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`

