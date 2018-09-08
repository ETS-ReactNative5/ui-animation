import React from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import { Gogoro } from 'layouts/gogoro-market/data.js';
import _ from 'lodash'

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
`;

export default class ColSwiper extends React.Component {
  state = {
    swiper: null,
    istoggle: false
  }
  swiperRef = ref => {
    this.setState({ swiper: ref.swiper });
  }
  render() {
    const params = {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (className) => {
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
            this.props.onToggle
          }
        }
      },
      onInit: swiper => {
        this.swiper = swiper;
      }
    }
    let { color, type } = this.props
    return (
      <Swiper {...params} ref={this.swiperRef}>
        <PictureWrapper>
          {_.map(Gogoro[type][color][`img`], i => (
            <img key={i} src={i} alt={i} />
          ))}
        </PictureWrapper>
        <PictureWrapper>
          {_.map(Gogoro[type][color][`img`], i => (
            <img key={i} src={i} alt={i} />
          ))}
        </PictureWrapper>
      </Swiper>
    );
  }
}
