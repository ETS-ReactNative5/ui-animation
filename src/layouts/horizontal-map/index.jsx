import React, { Component } from 'react'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import _ from 'lodash'

import 'bulma/css/bulma.css'
import ExtendCard from 'components/horizontal-map/ExtendCard'

const Section = styled.section`
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 0;
  }
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    > h1, p {
      display: none;
    }
  }
`
const Map = styled.section`
  height: var(--app-height);
  width: var(--app-width);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`
const Background = styled.div`
  background-image: url("https://i.imgur.com/0ZxFVS9.png");
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  opacity: calc(1 - var(--scroll));
  transform: scale(calc(1 + var(--scroll) * 1));

  display: none;
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  // padding: calc(var(--app-height) - var(--app-width)) 0;

  .swiperWrapper {
    /* border: 1px solid #50514F; */
    width: 100%;
    height: 100%; // var(--app-height);
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
  min-height: 300px;

  .swiper-container {
    width: 100%;
    height: 300px;
    min-height: 300px;

  }

  &.toggle {
    flex: 1;
    transition: all 0.35s ease;

    .swiper-container {
      transition: all 0.35s ease;
      height: 100%;
    }
  }
`
export default class HMap extends Component {
  state = {
    swiper: null,
    activeSlideIndex: 0,
    toggleBoxId: null,
    isBoxExtends: false
  }
  swiperRef = (ref) => {
    this.setState({ swiper: ref.swiper })
  }
  toggleBox = (id) => {
    this.setState({
      toggleBoxId: id,
      isBoxExtends: !this.state.isBoxExtends
    })
  }
  render () {
    const params = {
      spaceBetween: this.state.isBoxExtends ? 0 : -75,
      on: {
        slideChange: () => {
          let swiperList = document.querySelectorAll(".swiper-slide")
          for (var s of swiperList) {
            s.classList.add("nonactive")
          }
          swiperList[this.state.swiper.activeIndex].classList.remove("nonactive")
        }
      },
      onInit: (swiper) => {this.swiper = swiper}
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
              <div className="swiperWrapper container">

                <SwiperComponent className={`${this.state.isBoxExtends ? 'toggle' : null}`}>
                  <Swiper {...params} ref={this.swiperRef}>
                    {
                      _.map([0, 1], (el, id) =>
                        <ExtendCard
                          istoggle={id === this.state.toggleBoxId}
                          isBoxExtends={this.state.isBoxExtends}
                          toggleBox={() => this.toggleBox(id)}
                          key={id} />
                      )
                    }
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
