import React, { Component } from 'react'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import _ from 'lodash'

import 'bulma/css/bulma.css'
import ExtendCard from 'components/horizontal-map/ExtendCard'
import BackgroundMap from 'components/horizontal-map/Map'
import Header from 'components/header'

// import { Motion, spring } from 'react-motion'

const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
  height: var(--horizontalMap-app-height);
  width: var(--horizontalMap-app-width);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
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

  .swiperWrapper {
    /* border: 1px solid #50514F; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    padding: 0;
    text-shadow: 0 0 white;
    font-size: 2rem;
  }
`

const SwiperComponent = styled.div`
  width: 100%;
  // height: ${props => props.isBoxExtends ? `100%` : `auto`};
  height: 100%;
  min-height: 220px;

  .swiper-container {
    width: 100%;
    height: 100%;
    // height: ${props => props.isBoxExtends ? `100%` : `220px`};
  }
`
const elList = [
  {
    name: '美浜アメリカンビレッジ',
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
      ゆっくりとくつろぎながらお楽しみ頂けます。`,
    imgList: [
      require(`assets/horizontal-map/town1.jpg`),
      require(`assets/horizontal-map/town2.jpg`),
      require(`assets/horizontal-map/town3.jpg`),
    ]
  },
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
      ゆっくりとくつろぎながらお楽しみ頂けます。`,
    imgList: [
      require(`assets/horizontal-map/long1.jpg`),
      require(`assets/horizontal-map/long2.png`),
      require(`assets/horizontal-map/long3.jpg`),
    ]
  },
  {
    name: '沖縄県立博物館',
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
      ゆっくりとくつろぎながらお楽しみ頂けます。`,
    imgList: [
      require(`assets/horizontal-map/art1.jpg`),
      require(`assets/horizontal-map/art2.jpg`),
      require(`assets/horizontal-map/art3.jpg`),
      require(`assets/horizontal-map/art4.jpg`),
    ]
  }
]
export default class HMap extends Component {
  state = {
    swiper: null,
    activeSlideIndex: 0,
    isBoxExtends: false,
    mapWidth: 360,
    mapHeight: 640,
    displayMap: false
  }
  swiperRef = (ref) => {
    this.setState({ swiper: ref.swiper })
  }
  toggleBox = (id) => {
    this.setState({
      isBoxExtends: !this.state.isBoxExtends
    })
    console.log(`id: `, id)
  }

  componentDidMount () {
    this.setState({
      displayMap: true,
      mapWidth: document.getElementsByClassName('swiperWrapper')[0].clientWidth,
      mapHeight: document.getElementsByClassName('swiperWrapper')[0].clientHeight
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
        <Header color={`#50514F`}/>

        <Wrapper className="container">
          {/* map */}
          <Map className="hero is-light">
            {this.state.displayMap && (
              <BackgroundMap
                width={this.state.mapWidth}
                height={this.state.mapHeight}
                activeSlideIndex={this.state.activeSlideIndex}/>
            )}
            <ContentWrapper className="hero-body">
              <div className="swiperWrapper container">

                <SwiperComponent isBoxExtends={this.state.isBoxExtends}>
                  <Swiper {...params} ref={this.swiperRef}>
                    {
                      _.map(elList, (el, id) =>
                        <ExtendCard
                          cardContent={el}
                          isActive={id === this.state.activeSlideIndex}
                          isBoxExtends={this.state.isBoxExtends}
                          toggleBox={() => this.toggleBox(id)}
                          id={id}
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
