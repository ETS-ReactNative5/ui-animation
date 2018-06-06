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
    > h1, > p {
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
    justify-content: flex-end;
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
  min-height: 200px;

  .swiper-container {
    width: 100%;
    height: 200px;
    min-height: 200px;
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
const elList = [
  {
    name: 'ウミカジテラス',
    content: `
      台湾で生まれたタピオカドリンク
      (バブルティ)専門店です。
      アジアをはじめ、北米・中東、ヨーロッパに
      2000店以上展開し、世界で愛される味と品質が
      お楽しみいただけます。
      沖縄の新リゾート瀬長島ウミカジテラスでしか
      味わえない絶景のロケーションと共にタピオカ
      ドリンクをお楽しみください。

      店内がカフェスタイルになっているので、
      ゆっくりとくつろぎながらお楽しみ頂けます。
      台湾で生まれたタピオカドリンク
      (バブルティ)専門店です。
      アジアをはじめ、北米・中東、ヨーロッパに
      2000店以上展開し、世界で愛される味と品質が
      お楽しみいただけます。
      沖縄の新リゾート瀬長島ウミカジテラスでしか
      味わえない絶景のロケーションと共にタピオカ
      ドリンクをお楽しみください。

      店内がカフェスタイルになっているので、
      ゆっくりとくつろぎながらお楽しみ頂けます。

      台湾で生まれたタピオカドリンク
      (バブルティ)専門店です。
      アジアをはじめ、北米・中東、ヨーロッパに
      2000店以上展開し、世界で愛される味と品質が
      お楽しみいただけます。
      沖縄の新リゾート瀬長島ウミカジテラスでしか
      味わえない絶景のロケーションと共にタピオカ
      ドリンクをお楽しみください。

      店内がカフェスタイルになっているので、
      ゆっくりとくつろぎながらお楽しみ頂けます。`,
    imgList: [
      require(`assets/horizontal-map/long1.jpg`),
      require(`assets/horizontal-map/long2.png`),
      require(`assets/horizontal-map/long3.jpg`),
    ]
  }
]
export default class HMap extends Component {
  state = {
    swiper: null,
    activeSlideIndex: 0,
    isBoxExtends: true
  }
  swiperRef = (ref) => {
    this.setState({ swiper: ref.swiper })
  }
  toggleBox = (id) => {
    this.setState({
      isBoxExtends: !this.state.isBoxExtends
    })
  }
  render () {
    const params = {
      spaceBetween: this.state.isBoxExtends ? 0 : -75,
      on: {
        slideChange: () => this.setState({activeSlideIndex: this.state.swiper.activeIndex})
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

                <SwiperComponent className={`${this.state.isBoxExtends ? 'toggle' : ''}`}>
                  <Swiper {...params} ref={this.swiperRef}>
                    {
                      _.map(elList, (el, id) =>
                        <ExtendCard
                          cardContent={el}
                          isActive={id === this.state.activeSlideIndex}
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
