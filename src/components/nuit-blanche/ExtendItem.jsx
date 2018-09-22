import React from "react";
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
}
const ColorMapping = {
  '裝置作品 / Visual Art Work': `#5f0f86`,
  '表演活動 / Performance': `#eb5400`,
  '響應串連 / Off-Program': `#e60072`
}
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
  padding: 7.5px 7.5px;
  margin: 0 0 15px 0;
  border-radius: 5px;
  display: flex;
  background: transparent;
  width: calc(100% - 30px);
  margin-left: 15px;

  .bg {
    border-radius: 5px;
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
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;

    img {
      width: 20px;
      height: auto;
      margin-right: 4px;
    }
  }

  > p {
    color: #50514F;
    font-size: 13px;
    margin-bottom: 2.5px;
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
  width: 75px;
  height: calc(75px * 12 / 9);
  border-radius: 5px;
  position: relative;
  margin: 0 8px 0 0;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12.5px;
  > div {
    font-size: 12px;
    padding: 1px 5px;
    font-weight: lighter;
    color: grey;

    border: 1px solid grey;
    border-radius: 5px;
    margin-right: 5px;
    
    cursor: pointer;
    transition: all 0.25s ease;
    
    &.active {
      color: ${props => props.activeColor};
      border-color: ${props => props.activeColor};
    }
    > a {
      color: grey;
    }
  }
`
export default class ExtendItem extends React.Component {
  state = {
    currentState: machine.initial,
    dataState: `normal`,
    isSelect: false
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

  onToggle = (id) => {
    this.props.onToggle(id)
  }
  componentDidMount() {}
  render() {
    let { datum, group, isToggle } = this.props
    
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

            <BtnGroup activeColor={ColorMapping[group]}>
              <div className={isToggle ? `active` : null} onClick={() => this.onToggle(datum.id)}>{isToggle ? `取消選取` : `選取景點`}</div>
              <div><a target="_blank" href={`http://nuitblanchetaipei.info/work?id=${datum.id}`}>前往官網介紹</a></div>
            </BtnGroup>
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
