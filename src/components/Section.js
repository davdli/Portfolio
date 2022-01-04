import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";
import IcelandImage from '../assets/Iceland.jpeg';

const Section = () => {
  return (
    <Wrap>
      <GlobalStyle />
      <ItemText>
        <h1>David Li</h1>
        <h2>Software Engineer</h2>
      </ItemText>
      <ButtonGroup>
        <LeftButton>
          RESUME
        </LeftButton>
        <RightButton>
          CONTACT
        </RightButton>
      </ButtonGroup>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${IcelandImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding-top: 30vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const LeftButton = styled.div`
  color: white;
  font-size: 12;
  background-color: #171A20CC;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opactiy: 0.75;
  cursor: pointer;
`

const RightButton = styled(LeftButton)`
`

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 40px;
    font-weight: 700;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
  }
`;
