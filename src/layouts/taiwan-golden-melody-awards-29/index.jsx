import React, { Component } from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";
import Header from "components/header";

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

  &[data-state="expand"] {
    .card {
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
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  background: ${props =>
    props.bgSrc
      ? `url('${props.bgSrc}')`
      : `linear-gradient(to bottom left, #efcdcd, #e5a9bb)`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
    transform: rotateX(0deg) translateX(${props => `${0}rem`});
  }

  &.nonactive {
    opacity: 0;
  }
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
      },
      {
        name: "best-female-taiwanese-singer",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-female-taiwanese-singer.jpg`)
      },
      {
        name: "song-of-the-year",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/song-of-the-year.jpg`)
      },
      {
        name: "best-lyrics",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-lyrics.jpg`)
      },
      {
        name: "best-mandarin-album",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-mandarin-album.jpg`)
      },
      {
        name: "best-taiwanese-album",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-taiwanese-album.jpg`)
      },
      {
        name: "best-arrangement",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-arrangement.jpg`)
      },
      {
        name: "best-female-taiwanese-singer",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-female-taiwanese-singer.jpg`)
      },
      {
        name: "song-of-the-year",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/song-of-the-year.jpg`)
      },
      {
        name: "best-lyrics",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-lyrics.jpg`)
      },
      {
        name: "best-mandarin-album",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-mandarin-album.jpg`)
      },
      {
        name: "best-taiwanese-album",
        bg: require(`assets/Taiwan-Golden-Melody-Awards-29/best-taiwanese-album.jpg`)
      }
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
    document
      .getElementById(`GMA29`)
      .setAttribute("data-state", transition(this.state.currentState, `CLICK`));
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
                />
              </CardWrapper>
            ))}
          </Cards>
        </GMAContainer>
      </Section>
    );
  }
}
