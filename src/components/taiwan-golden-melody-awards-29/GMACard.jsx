import React, { Component } from "react";
import styled from "styled-components";
import Flipping from "flipping/dist/flipping.web.js";
const flipping = new Flipping();

const machine = {
  initial: "normal",
  states: {
    normal: {
      on: { CLICK: "expand" }
    },
    expand: {
      on: { CLICK: "normal" }
    }
  }
};
const transition = (state, event) => {
  return machine.states[state].on[event] || state;
};

const CardWrapper = styled.div`
  width: 100%;
  height: 100px;
  text-align: right;
  text-align: -webkit-right;
  transition: height 0.35s ease;
  z-index: 1;
  transform: rotateX(-25deg) translateX(${props => `${1}rem`});
  transition: height 0s ease, opacity 0.2s linear;
  opacity: 1;

  &.active {
    transform: rotateX(0deg) translateX(${props => `${0}rem`});
    z-index: 9998;
  }

  &.nonactive {
    height: 0;
    opacity: 0;
    transition: height 0.5s ease, opacity 0.2s linear;
  }
`;

const Card = styled.div`
  width: 90%;
  height: 180px;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  font-size: 24px;
  line-height: 1;
  position: relative;

  filter: grayscale(95%);
  transition: all 0.3s ease;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0);

  &:hover,
  &:focus {
    transition: all 0.3s ease;
    box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.35);
    filter: grayscale(0%);
  }

  > .img {
    height: 180px;
    width: 100%;
    border-radius: 10px;
    background: ${props =>
      props.bgSrc
        ? `url('${props.bgSrc}')`
        : `linear-gradient(to bottom left, #efcdcd, #e5a9bb)`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg {
    z-index: -1;
    border-radius: 10px;
    background-color: white;
  }
`;

const ExpandCard = styled.div`
  width: 100%;
  height: var(--GMA29-app-height);
  > .img {
    height: calc(var(--GMA29-app-width) * 9 / 16);
    width: var(--GMA29-app-width);
    background: ${props =>
      props.bgSrc
        ? `url('${props.bgSrc}')`
        : `linear-gradient(to bottom left, #efcdcd, #e5a9bb)`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  > .expand-content {
    flex: 1;
  }

  .bg {
    border-radius: 0px;
    background-color: white;
  }
  display: flex;
  flex-direction: column;
`;

export default class GMA29 extends Component {
  state = {
    currentState: `normal`,
    lastScrollPos: 0
  };
  componentDidMount() {}
  toggleCard = id => {
    let nextState = transition(this.state.currentState, `CLICK`);
    // flipping
    flipping.read();
    document.getElementById(`GMA29`).setAttribute("data-state", nextState);
    document
      .getElementsByClassName(`cards`)[0]
      .setAttribute("data-state", nextState);
    flipping.flip();

    // update state
    this.props.handleToggle(id);

    // adjust position
    let lastScrollPos = document.getElementsByClassName(`cards`)[0].scrollTop;
    document.getElementsByClassName(`cards`)[0].scrollTop =
      nextState === `normal` ? this.state.lastScrollPos : 0;

    this.setState({
      lastScrollPos,
      currentState: nextState
    });
  };
  render() {
    return (
      <CardWrapper
        className={
          this.props.isToggle
            ? this.props.id === this.props.toggleCardId
              ? `active cardwrapper`
              : `nonactive cardwrapper`
            : `cardwrapper`
        }
      >
        <Card
          className={`card`}
          params={this.props.id}
          bgSrc={this.props.bg}
          onClick={() => this.toggleCard(this.props.id)}
        >
          <div className="bg" data-flip-key={`bg-${this.props.id}`} />
          <div className="img" data-flip-key={`img-${this.props.id}`} />
        </Card>

        <ExpandCard
          className="expand-card"
          bgSrc={this.props.bg}
          onClick={() => this.toggleCard(this.props.id)}
        >
          <div className="bg" data-flip-key={`bg-${this.props.id}`} />
          <div className="img" data-flip-key={`img-${this.props.id}`} />
          <div className="expand-content">content {this.props.id}</div>
        </ExpandCard>
      </CardWrapper>
    );
  }
}
