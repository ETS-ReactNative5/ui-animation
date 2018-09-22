import React from "react";
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
  width: 100%;
  height: ${props => props.state === `normal` ? `auto` : `100%`};
  z-index: ${props => (props.zIndex ? 1 : 0)};
  position: initial;

  .item-normal,
  .item-expand {
    display: none;
    position: absolute;
    box-sizing: border-box;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &[data-state="normal"] {
    > .item-normal {
      display: flex;
      position: relative;
    }
  }

  &[data-state="expand"] {
    > .item-expand {
      display: flex;
      position: relative;
    }
  }
`;

const NormalItem = styled.div`
  padding: 5px 7.5px;
  margin: 0 0 15px 0;
  border-radius: 5px;
  display: flex;
  background: transparent;
  width: calc(100% - 30px);
  margin-left: 15px;

  .bg {
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ExpandItem = styled.div`
  width: calc(100%);
  height: 100%;
  padding: 5px 7.5px;
  margin: 0 0 15px 0;
  background: #fff;
  border-radius: 5px;
  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  align-items: center;
  // transition: all 0.25s ease;

  .bg {
    border-radius: 10px;
    background-color: white;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px);

  > h3 {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: auto;
      margin-right: 4px;
    }
  }

  > p {
    color: #50514F;
    font-size: 13px;
    margin-bottom: 5px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;

    &.time {
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Media = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  position: relative;
  margin: 0 8px 0 0;
  overflow: hidden;
  > img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`

export default class ExtendItem extends React.Component {
  state = {
    currentState: machine.initial,
    dataState: `normal`
  };
  send = event => {
    this.setState({
      currentState: transition(this.state.currentState, event)
    });
    flipping.read();
    document
      .getElementById(`item-${this.props.id}`)
      .setAttribute("data-state", transition(this.state.currentState, event));
    flipping.flip();
  };
  componentDidMount() {}
  render() {
    let { datum } = this.props
    return (
      <Wrapper
        id={`item-${this.props.id}`}
        state={this.state.currentState}
        data-state={this.state.dataState}
        className={`item-wrapper`}
      >
        <NormalItem className="item-normal">
          <div className="bg" data-flip-key={`bg-${this.props.id}`} />
          <Media className="media" data-flip-key={`media-${this.props.id}`} >
            <img src={datum.infoWindowImage} alt={datum.infoWindowImage} />
          </Media>
          <Info className="info" data-flip-key={`info-${this.props.id}`} >
            <h3><img src={datum.marker} alt={datum.marker} />{datum.title}</h3>
            <p className="time">{datum.timeContent}</p>
            <p>{datum.locationContent}</p>
          </Info>
        </NormalItem>

        <ExpandItem className="item-expand" onClick={() => this.send("CLICK")}>
          <div className="bg" data-flip-key={`bg-${this.props.id}`} />
          <h1 className="title" data-flip-key={`title-${this.props.id}`}>
            {datum.title}
          </h1>
        </ExpandItem>
      </Wrapper>
    );
  }
}
