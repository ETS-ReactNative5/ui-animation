import React, { Component } from 'react'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import 'bulma/css/bulma.css'

const Section = styled.section`
  height: 100%;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Map = styled.section`
  height: var(--app-height);
  width: var(--app-width);
  overflow: hidden;
`
const Background = styled.div`
  background-image: url("https://i.imgur.com/0ZxFVS9.png");
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  opacity: calc(1 - var(--scroll));
  transform: scale(calc(1 + var(--scroll) * 1));
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: calc(var(--app-height) - var(--app-width)) 0;

  .mapWrapper {
    /* border: 1px solid #50514F; */
    width: 100%;
    height: var(--app-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0;
    color: unquote('rgba(0, 0, 0, var(--scroll, 0))');
    text-shadow: 0 0 white;
    font-size: 2rem;
  }
`
const SwiperComponent = styled.div`
  width: 100%;
  height: auto;

  .swiper-container {
    width: 100%;
    height: 300px;

    .swiper-slide {
      transform: scale(0.8);
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;

      &.nonactive {
        transition: 0.25s ease;
        transform: scale(0.7) translateY(0px);
      }

      &.toggle {
        transform: scale(1) translateY(0px);
      }
      h2.swiperTitle {
        color: #50514F;
        font-size: 2rem;
        font-family: "Raleway";
        margin: 10px 0;
      }
      .selectButton {
        font-size: 1rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        width: 100%;
        padding: 15px 0;
        text-align: center;

        color: white;
        background: var(--purple);
        cursor: pointer;
      }
    }
  }
`
export default class HMap extends Component {
  state = {}
  render () {
    const params = {
      spaceBetween: -30
    }
    return (
      <Section className="section">
        <Wrapper className="container">
          {/* title */}
          <h1 className="title">RXCSS scroll</h1>
          <p className="subtitle">scroll to see the magic!</p>

          {/* map */}
          <Map className="hero is-light">
            <Background />
            <ContentWrapper className="hero-body">
              <div className="mapWrapper container">

                <SwiperComponent>
                  <Swiper {...params}>
                    <div className="boxShadow">
                      <h2 className="swiperTitle">Mountain Bike x2</h2>
                      <div className="selectButton">select bike</div>
                    </div>
                  </Swiper>
                </SwiperComponent>

              </div>
            </ContentWrapper>
          </Map>

        </Wrapper>
      </Section>
    )
  }
}
