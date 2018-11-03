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
  background: var(--Peter-Huang-Photo-bg-color);

  display: grid;
  grid-template-columns: repeat(24, 1fr [col-start]);
  grid-template-rows: repeat(24, 1fr [row-start]);

  @media screen and (max-width: 768px) {}

  .item {
    background: var(--Peter-Huang-Photo-secondary-color);
  }

  .title-item {
    grid-column: col-start 3 / col-start 16;
    grid-row: row-start 4 / row-start 6;
  }
  .photo-item {
    grid-column: col-start 5 / col-start 22;
    grid-row: row-start 12 / row-start 20;
    background-image: ${props => props.url ? props.url : `url(${require('assets/peter-huang-photo/cell.jpg')})` };
    background-position: center;
    background-size: cover;
    position: relative;

    .label {
      position: absolute;
      bottom: 10px;
      right: -20px;
      width: 50%;
      height: 20%;
      background: var(--Peter-Huang-Photo-secondary-color);
    }
  }
  .bg-item {
    background: linear-gradient(90deg, var(--Peter-Huang-Photo-bg-color) 18px, transparent 1%) center, linear-gradient(var(--Peter-Huang-Photo-bg-color) 18px, transparent 1%) center, var(--Peter-Huang-Photo-secondary-color);
    background-size: 20px 20px;
    grid-column: col-start 3 / col-start 21;
    grid-row: row-start 10 / row-start 19;
  }

`

export default class Photo extends React.Component {
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
          <Wrapper className="wrapper">
            <div className="item title-item"></div>
            <div className="item bg-item"></div>
            <div className="item photo-item">
              <div className="label"></div>>
            </div>
          </Wrapper>
        </Section>    
    )
  }
}