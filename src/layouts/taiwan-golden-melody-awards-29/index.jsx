import React, { Component } from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";
import Header from "components/header";

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
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
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

const CardWrapper = styled.div`
  height: 690px;
  display: flex;

  grid-row: 2 / -1;
  grid-column: 2 / -1;
  overflow-y: scroll;

  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 100% 0%;
`;
const Temp = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
`;
const Card = styled.div`
  width: 100%;
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

  transform: rotateX(-25deg) translateX(${props => `${1}rem`})
    translateY(${props => `${props.params * -3.5}rem`})
    translateZ(${props => `${props.params * -1.75}rem`});
  font-size: 24px;
  line-height: 1;
  filter: grayscale(95%);
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.35);
    filter: grayscale(0%);
  }
`;

export default class GMA29 extends Component {
  state = {
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
  componentDidMount() {}
  render() {
    console.log(this.state);
    return (
      <Section className="section">
        <Header
          color={`#50514F`}
          counter={2}
          title={`Taiwan Golden Melody Awards #29`}
        />

        <GMAContainer>
          <Title>
            <h1>#GMA29</h1>
          </Title>
          <CardWrapper>
            <Temp>
              {this.state.cardArray.map((card, id) => (
                <Card key={id} params={id} bgSrc={card.bg}>
                  {/* @{card.name} */}
                </Card>
              ))}

              {/* <Card>@card2</Card>
              <Card>@card3</Card>
              <Card>@card4</Card>
              <Card>@card5</Card>
              <Card>@card6</Card>
              <Card>@card7</Card>
              <Card>@card8</Card>
              <Card>@card9</Card>
              <Card>@card10</Card>
              <Card>@card11</Card>
              <Card>@card12</Card> */}
            </Temp>
          </CardWrapper>
        </GMAContainer>
      </Section>
    );
  }
}
