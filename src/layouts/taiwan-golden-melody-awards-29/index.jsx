import React, { Component } from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";
import Header from "components/header";
import GMACard from "components/taiwan-golden-melody-awards-29/GMACard";
import { data } from "./data.js";

const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 0;
  }
`;

const GMAContainer = styled.section`
  height: var(--GMA29-app-height);
  width: var(--GMA29-app-width);
  border-radius: 10px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.24);

  overflow: hidden;
  background: #efefef;
  display: flex;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }

  .card,
  .expand-card {
    display: none;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &[data-state="normal"] {
    .card {
      display: flex;
    }
  }

  &[data-state="expand"] {
    .expand-card {
      display: flex;
    }
  }
`;

const Title = styled.div`
  z-index: 9999;
  position: absolute;
  top: 25px;
  left: 25px;
  width: auto;
  padding: 5px 10px;

  > h1 {
    background: var(--GMA29-CI);
    font-size: 24px;
    padding: 5px 10px;
    color: var(--GMA29-black);
  }
`;

const Cards = styled.div`
  height: calc(${props => props.height}px);
  width: 100%;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  overflow-x: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 100% 0%;

  &[data-state="expand"] {
    overflow-y: hidden;
  }
`;

export default class GMA29 extends Component {
  state = {
    isToggle: false,
    toggleCardId: null,
    containerHeight: 400,
    cardArray: data
  };
  componentDidMount() {
    this.setState({
      containerHeight: document.querySelector("#GMA29").clientHeight
    });
  }
  toggleCard = id => {
    this.setState({
      isToggle: !this.state.isToggle,
      toggleCardId: id
    });
  };
  render() {
    return (
      <Section className="section">
        <Header
          color={`#50514F`}
          counter={2}
          title={`Taiwan Golden Melody Awards #29`}
        />

        <GMAContainer id="GMA29" data-state={`normal`}>
          <Title>
            <h1>#GMA29</h1>
          </Title>
          <Cards className="cards" height={this.state.containerHeight}>
            {this.state.cardArray.map((card, id) => (
              <GMACard
                id={id}
                key={id}
                bg={card.bg}
                lastScrollPos={this.state.lastScrollPos}
                isToggle={this.state.isToggle}
                toggleCardId={this.state.toggleCardId}
                handleToggle={this.toggleCard}
              />
            ))}
          </Cards>
        </GMAContainer>
      </Section>
    );
  }
}
