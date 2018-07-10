import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "bulma/css/bulma.css";
import Header from "components/header";
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

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &[data-state="normal"] {
    .card {
      position: relative;
      display: block;
      width: 90%;
    }
  }
  &[data-state="expand"] {
    .expand-card {
      position: relative;
      display: flex;
      width: 100%;
    }
  }
`;

const Title = styled.div`
  z-index: 1;
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
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 100% 0%;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100px;
  text-align: right;
  text-align: -webkit-right;
`;

const Card = styled.div`
  width: 90%;
  height: 180px;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  font-size: 24px;
  line-height: 1;
  filter: grayscale(95%);
  transition: all 0.3s ease;
  transform: rotateX(-25deg) translateX(${props => `${1}rem`});

  &:hover {
    transition: all 0.3s ease;
    box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.35);
    filter: grayscale(0%);
  }

  &.active {
    filter: grayscale(0%);
    border-radius: 0px;
    transform: rotateX(0deg) translateX(${props => `${0}rem`});
  }

  &.nonactive {
    opacity: 0;
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
    isToggle: false,
    toggleCardId: null,
    containerHeight: 400,
    cardArray: [
      {
        name: "best-arrangement",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-arrangement.jpg`)
      }
      // {
      //   name: "best-female-taiwanese-singer",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-female-taiwanese-singer.jpg`)
      // },
      // {
      //   name: "song-of-the-year",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/song-of-the-year.jpg`)
      // },
      // {
      //   name: "best-lyrics",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-lyrics.jpg`)
      // },
      // {
      //   name: "best-mandarin-album",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-mandarin-album.jpg`)
      // },
      // {
      //   name: "best-taiwanese-album",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-taiwanese-album.jpg`)
      // },
      // {
      //   name: "best-arrangement",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-arrangement.jpg`)
      // },
      // {
      //   name: "best-female-taiwanese-singer",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-female-taiwanese-singer.jpg`)
      // },
      // {
      //   name: "song-of-the-year",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/song-of-the-year.jpg`)
      // },
      // {
      //   name: "best-lyrics",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-lyrics.jpg`)
      // },
      // {
      //   name: "best-mandarin-album",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-mandarin-album.jpg`)
      // },
      // {
      //   name: "best-taiwanese-album",
      //   bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-taiwanese-album.jpg`)
      // }
    ]
  };
  componentDidMount() {
    this.setState({
      containerHeight: document.querySelector("#GMA29").clientHeight
    });
  }
  toggleCard = id => {
    this.setState({
      currentState: transition(this.state.currentState, `CLICK`),
      isToggle: !this.state.isToggle,
      toggleCardId: id
    });
    flipping.read();
    document
      .getElementById(`GMA29`)
      .setAttribute("data-state", transition(this.state.currentState, `CLICK`));
    flipping.flip();
  };
  render() {
    return (
      <Section className="section">
        <Header
          color={`#50514F`}
          counter={2}
          title={`Taiwan Golden Melody Awards #29`}
        />

        <GMAContainer id="GMA29" data-state={this.state.currentState}>
          <Title>
            <h1>#GMA29</h1>
          </Title>
          <Cards className="cards" height={this.state.containerHeight}>
            {this.state.cardArray.map((card, id) => (
              <CardWrapper className="cardwrapper" key={id}>
                <Card
                  className={
                    this.state.isToggle
                      ? id === this.state.toggleCardId
                        ? `active card`
                        : `nonactive card`
                      : `card`
                  }
                  params={id}
                  bgSrc={card.bg}
                  onClick={() => this.toggleCard(id)}
                >
                  <div className="bg" data-flip-key={`bg-0`} />
                  <div className="img" data-flip-key={`img-0`} />
                </Card>

                <ExpandCard
                  className="expand-card"
                  bgSrc={card.bg}
                  onClick={() => this.toggleCard(id)}
                >
                  <div className="bg" data-flip-key={`bg-0`} />
                  <div className="img" data-flip-key={`img-0`} />
                  <div className="expand-content">content</div>
                </ExpandCard>
              </CardWrapper>
            ))}
          </Cards>
        </GMAContainer>
      </Section>
    );
  }
}
