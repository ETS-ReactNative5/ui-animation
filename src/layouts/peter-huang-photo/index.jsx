import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css"

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: calc(100vh);
    padding: 0 !important;
  }
`;

const Wrapper = styled.div`
  height: var(--Peter-Huang-Photo-height);
  width: var(--Peter-Huang-Photo-width);
  border-radius: 1px;
  border: 1px solid #323232;

  @media screen and (max-width: 768px) {}
`

export default class GogoroMarket extends React.Component {
  componentDidMount () {
    document.body.height = window.innerHeight;
  }
  render () {
    return (
        <Section className="section">
          <Header
            color={`#50514F`}
            counter={5}
            title={`Peter-Huang-photo`}
          />
          <Wrapper className="wrapper"></Wrapper>
        </Section>    
    )
  }
}