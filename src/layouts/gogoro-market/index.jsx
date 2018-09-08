import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css"
import CarInfo from 'components/gogoro/Info'
import { Gogoro } from './data.js';
import _ from 'lodash'
import Swiper from "react-id-swiper";

const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 0 !important;
  }
`;

const Wrapper = styled.div`
  height: var(--default-iphone-height);
  width: var(--default-iphone-width);
  border-radius: 10px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.24);
  /* may cause problem */
  overflow: hidden;

  > .swiper-container {
    width: 100%;
    height: 100%;
    padding: 10px 10px 40px 10px;
    border-radius: 10px;
    overflow: hidden;

    .swiper-slide  {
      border-radius: 10px;
    }
    .row-swiper-pagination {
      top: inherit;
      bottom: 10px;
      left: 5%;
      width: 90%;
      height: 6px;

      display: flex;
      justify-content: center;
      font-weight: lighter;
      font-size: 18px;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.05);

      span {
        border-radius: 5px;
        background: linear-gradient(135deg, #33FC74, #43D8FF);
      }
    }
  }
`
const CarContainer = styled.div`
  width: 95%;
  height: 100%;
  background: ${props => props.bgColor ? props.bgColor : '#FFDA56'};
  position: relative;

  transition: background 0.2s ease;
`
const CarGallery = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;

  .swiper-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }

    .swiper-pagination  {
      top: 5%;

      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid white;
        margin: 8px 4px;
        background: transparent;
        border: 1px solid white;
        opacity: .75;

        &-active {
          background: white;
          opacity: 1;
        }
      }
    }
  }
`

const PictureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 50%;
    user-select: none;
    transform: translateY(-50%) scale(var(--gogoro-scale));
  }
`

export default class GogoroMarket extends React.Component {
  state = {
    swiper: null,
    istoggle: false,
    type: `gp1`,
    color: `white`,
    bgColor: `#FFDA56`
  }
  onChange = (data) => {
    let { type, color, bgColor } = data
    this.setState({type, color, bgColor})
  }
  swiperRef = ref => {
    this.setState({ swiper: ref.swiper });
  }
  render () {
    let { type, color, bgColor } = this.state
    const params = {
      spaceBetween: this.state.isBoxExtends ? 0 : -75,
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}"></span>`;
        },
      },
      on: {
        touchMove: (event) => {
          let totalLen = 2
          if(event.movementY < -30 && this.state.swiper.activeIndex + 1 === totalLen) {
            let info = document.querySelector('.info');
            if (!this.state.istoggle && !info.classList.contains(`expand`)) {
              document.documentElement.style.setProperty('--gogoro-infoHeight', '550px'); 
              document.querySelector('.info').classList.add('expand'); 
            }
            this.setState({ istoggle: !this.state.istoggle })
          }
        }
      },
      onInit: swiper => {
        this.swiper = swiper;
      }
    }
    const RowParams = {
      pagination: {
        el: '.row-swiper-pagination',
        type: 'progressbar',
      },
      slidesPerView: 'auto',
      spaceBetween: 10,
    }
    return (
        <Section className="section">
          <Header
            color={`#50514F`}
            counter={3}
            title={`Gogoro-market`}
          />
          <Wrapper className="wrapper">
            <Swiper {...RowParams}>
              {
                [0, 1, 2].map((d) => 
                  <CarContainer key={d} bgColor={bgColor}>
                    {/* CarGallery */}
                    <CarGallery>
                      <Swiper {...params} ref={this.swiperRef}>
                        <PictureWrapper>
                          {
                            _.map(Gogoro[type][color][`img`], (i) => 
                              <img key={i} src={i} alt={i}/>
                            )
                          }
                        </PictureWrapper>
                        <PictureWrapper>
                          {
                            _.map(Gogoro[type][color][`img`], (i) => 
                              <img key={i} src={i} alt={i}/>
                            )
                          }
                        </PictureWrapper>
                      </Swiper>
                    </CarGallery>
                    {/* Info */}
                    <CarInfo zIndex={2} data={Gogoro[type]} color={color} istoggle={this.state.istoggle} onChange={(data) => this.onChange(data)}/>
                  </CarContainer>
                )
              }
            </Swiper>
          </Wrapper>
        </Section>    
    )
  }
}