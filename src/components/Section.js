import React from 'react';
import styled from 'styled-components';
import IcelandImage from '../assets/Iceland.jpg';

const Section = () => {
  return (
    <Wrap>
      Section
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${IcelandImage});
`
