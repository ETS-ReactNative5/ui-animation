import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css"
import Map from 'components/nuit-blanche/Map.jsx'
import List from 'components/nuit-blanche/List.jsx'

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
  height: var(--default-nuit-height);
  width: var(--default-nuit-width);
  border-radius: 10px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.24);
  position: relative;
  /* may cause problem */
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 50px);
    width: 100%;
    padding: 0 !important;
    box-shadow: none;
  }

  > #nuit-blanche-map-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`

export default class Nuit extends React.Component {
  state = {
    steps: []
  }
  _onToggleStep = (steps) => {
    this.setState({ steps })
  }
  render () {
    return (
        <Section className="section">
          <Header
            color={`#50514F`}
            counter={4}
            title={`Nuit-Blanche #2018`}
          />
          <Wrapper className="wrapper">
            {/* <Map steps={this.state.steps}/> */}
            <List activeSteps={this.state.steps} _onToggleStep={this._onToggleStep}/>
          </Wrapper>
        </Section>    
    )
  }
}