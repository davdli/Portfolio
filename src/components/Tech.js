import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";

const Tech = () => {
  return (
    <div>
      <Wrap>
        <GlobalStyle />
        <TitleText>
          <h2 id='tech-header'>Technologies</h2>
        </TitleText>
        <TechGroup>
          <TechIcon>
              <TechName>
                JavaScript
              </TechName>
              <i class="devicon-javascript-plain colored"></i>
          </TechIcon>

          <TechIcon>
              <TechName>
                HTML5
              </TechName>
              <i class="devicon-html5-plain colored"></i>
          </TechIcon>

          <TechIcon>
              <TechName>
                HTML5
              </TechName>
              <i class="devicon-html5-plain colored"></i>
          </TechIcon>
        </TechGroup>
      </Wrap>
    </div>
  )
}

export default Tech;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
`

const TitleText = styled.div`
  margin-top: 40px;
`
const TechGroup = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const TechIcon = styled.div`
border-top: 3px solid #393C41;
height: 190px;
width: 190px;
margin: 0px 20px 0px 20px;
padding: 20px 20px 20px;
`

const TechName = styled.div`
  padding: 0px 0px 20px 0px;
`

const GlobalStyle = createGlobalStyle`
  #tech-header {
    font-size: 28px;
    font-weight: 500;
    color: #181B21;
  }
  .devicon-javascript-plain {
    font-size: 56px;
  }
  .devicon-html5-plain {
    font-size: 56px;
  }
`
