import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import Box from 'components/design-4x4x2018/Box.jsx'
import "bulma/css/bulma.css"
import { data } from './data.js'
import _ from 'lodash'

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media screen and (max-width: 768px) {
    height: calc(100vh);
    padding: 0 !important;
  }
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 50vw;
  max-height: 50vw;
  background: transparent;
  display: grid;
  grid-template-columns: repeat(4, 1fr [col-start]);
  grid-template-rows: repeat(4, 1fr [row-start]);
  grid-gap: 5px;
`

export default class Design4x4x2018 extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Section className="section">
        <Header
          color={`#50514F`}
          counter={6}
          title={`2018 design 4x4`}
        />
        <Wrapper>
          {
            _.map(data, (datum, id) => <Box key={id} number={id}>{datum.col}</Box>)
          }
        </Wrapper>
      </Section>
    )
  }
}