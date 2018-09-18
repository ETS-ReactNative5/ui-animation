import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import _ from "lodash";
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  30% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  z-index: ${props => (props.zIndex ? 1 : 0)};
  display: flex;
  align-items: flex-end;

  .card-normal,
  .card-expand {
    display: none;
    position: absolute;
    box-sizing: border-box;

    h1 {
      font-weight: 400;
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &[data-state="normal"] {
    > .card-normal {
      display: flex;
      position: relative;
    }
  }

  &[data-state="expand"] {
    > .card-expand {
      display: flex;
      position: relative;

      .figure {
        width: 100px;
        height: 100px;
      }
      .btn {
        width: 90%;
        padding: 15px 20px;
      }
    }
  }

  &.swiper-slide {
    width: 100%;
    height: 100%;
  }
`;

const NormalCard = styled.div`
  width: 100%;
  height: 200px;
  transform: scale(0.75);
  padding: 15px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

  transition: all 0.25s ease;
  .bg {
    border-radius: 10px;
    background-color: white;
  }

  h1 {
    font-size: calc(18px / 0.75);
  }
`;

const ExpandCard = styled.div`
  width: 100%;
  height: 100%;
  transform: scale(1);
  padding: 10px 0;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.25s ease;

  .bg {
    border-radius: 0px;
    background-color: white;
  }
  h1 {
    font-size: 32px;
  }
`;

const Button = styled.div`
  width: 100%;
  color: white;
  background: var(--horizontalMap-orange);
  padding: 15px 20px;
  text-align: center;

  font-size: calc(12px / 0.75);
  letter-spacing: 1px;

  cursor: pointer;
`;

const ImgList = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
  transition: all 0.25s ease;
  width: 100%;
  height: auto;

  > div {
    margin: 5px;
    border-radius: 5px;
    overflow: hidden;
    width: 64px;
    height: 64px;
    transition: all 0.35s ease;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
const Paragraph = styled.div`
  overflow-y: scroll;

  width: 100%;
  height: auto;
  flex-grow: 1;

  padding: 15px;
  animation: ${fadeIn} 0.5s cubic-bezier(0, 0.5, 0.2, 1) both;

  p {
    color: #50514f;
    font-size: 18px;
  }
`;
export default class ExtendCard extends Component {
  state = {
    currentState: machine.initial,
    dataState: `normal`
  };
  toggleBox = id => {
    this.props.toggleBox(id);
  };
  send = event => {
    console.log(this.state.currentState, event);
    this.setState({
      currentState: transition(this.state.currentState, event)
    });
    flipping.read();
    document
      .getElementById(`card-${this.props.id}`)
      .setAttribute("data-state", transition(this.state.currentState, event));
    flipping.flip();
  };
  componentDidMount() {}
  render() {
    return (
      <Wrapper
        id={`card-${this.props.id}`}
        zIndex={this.props.isActive}
        data-state={this.state.dataState}
        className={`swiper-slide`}
      >
        <NormalCard className="card-normal">
          <div className="bg" data-flip-key={`bg-${this.props.id}`} />
          <h1 className="title" data-flip-key={`title-${this.props.id}`}>
            {this.props.cardContent.name}
          </h1>
          <ImgList data-flip-key={`imgList-${this.props.id}`}>
            {_.map(this.props.cardContent.imgList, (figure, id) => (
              <div
                className="figure"
                key={id}
                style={{ backgroundImage: `url(${figure})` }}
              />
            ))}
          </ImgList>
          <Button
            className="btn"
            data-flip-key={`btn-${this.props.id}`}
            onClick={() => this.send("CLICK")}
          >
            READ MORE
          </Button>
        </NormalCard>

        <ExpandCard className="card-expand">
          <div className="bg" data-flip-key={`bg-${this.props.id}`} />
          <h1 className="title" data-flip-key={`title-${this.props.id}`}>
            {this.props.cardContent.name}
          </h1>
          <ImgList data-flip-key={`imgList-${this.props.id}`}>
            {_.map(this.props.cardContent.imgList, (figure, id) => (
              <div
                className="figure"
                key={id}
                style={{ backgroundImage: `url(${figure})` }}
              />
            ))}
          </ImgList>

          <Paragraph>
            <p>{this.props.cardContent.content}</p>
          </Paragraph>

          <Button
            className="btn"
            data-flip-key={`btn-${this.props.id}`}
            onClick={() => this.send("CLICK")}
          >
            CLOSE
          </Button>
        </ExpandCard>
      </Wrapper>
    );
  }
}
