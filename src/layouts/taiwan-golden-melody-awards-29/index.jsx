import React, { Component } from 'react'
import styled from 'styled-components'
import 'bulma/css/bulma.css'
import Header from 'components/header'

const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 0;
  }
`

const GMAContainer = styled.section`
  height: var(--GMA29-app-height);
  width: var(--GMA29-app-width);
  overflow: hidden;
  background: #ddd;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`
export default class GMA29 extends Component {
  state = {}
  componentDidMount () {}
  render () {
    return (
      <Section className="section">
        <Header color={`#50514F`} counter={2} title={`Taiwan Golden Melody Awards #29`}/>

        <GMAContainer>

        </GMAContainer>
      </Section>
    )
  }
}
