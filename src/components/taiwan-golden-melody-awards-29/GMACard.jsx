import React, { Component } from "react";
import styled from "styled-components";
import { Play } from "react-feather";

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
    background: var(--GMA29-content-bg);
  }
`;

const ExpandCard = styled.div`
  width: 100%;
  height: var(--GMA29-app-height);
  display: flex;
  flex-direction: column;

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
    background: var(--GMA29-content-bg);
  }
`;

const PlaySection = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const PlayBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0px solid var(--GMA29-black);
  background: var(--GMA29-CI);
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-left: 2.5px;
    fill: white;
    stroke: white;
  }
`;
export default class GMA29 extends Component {
  state = {
    lastScrollPos: 0
  };
  componentDidMount() {}
  toggleCard = id => {
    // adjust position
    let lastScrollPos = document.getElementsByClassName(`cards`)[0].scrollTop;
    document.getElementsByClassName(`cards`)[0].scrollTop =
      this.props.currentState === `normal` ? 0 : this.state.lastScrollPos;

    this.setState({ lastScrollPos });
    // update state
    this.props.handleToggle(id);
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
          <div className="expand-content">
            <PlaySection>
              <PlayBtn>
                <Play size={20} />
              </PlayBtn>
            </PlaySection>
          </div>
        </ExpandCard>
      </CardWrapper>
    );
  }
}
