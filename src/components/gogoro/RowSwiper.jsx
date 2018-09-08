import React from 'react'
import Swiper from "react-id-swiper";
import styled from "styled-components";
import { Gogoro } from 'layouts/gogoro-market/data.js';
import CarInfo from 'components/gogoro/Info';
import ColSwiper from 'components/gogoro/ColSwiper.jsx'

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

export default class RowSwiper extends React.Component {
  state = {
    swiper: null,
    istoggle: false,
    type: `gp1`,
    color: `white`,
    bgColor: `#FFDA56`
  }
  swiperRef = ref => {
    this.setState({ swiper: ref.swiper });
  }
  onChange = (data) => {
    let { type, color, bgColor } = data
    this.setState({type, color, bgColor})
  }
  onToggle = () => {
    this.setState({ istoggle: !this.state.istoggle })
  }
  render () {
    const RowParams = {
      pagination: {
        el: '.row-swiper-pagination',
        type: 'progressbar',
      },
      slidesPerView: 'auto',
      spaceBetween: 10,
    }
    let { bgColor, color, type } = this.state
    return (
      <Swiper {...RowParams}>
        {
          [0, 1, 2].map((d) => 
            <CarContainer key={d} bgColor={bgColor}>
              {/* CarGallery */}
              <CarGallery>
                <ColSwiper 
                  type={type}
                  color={color}
                  bgColor={bgColor}
                  onToggle={this.onToggle}
                />
              </CarGallery>
              {/* Info */}
              <CarInfo zIndex={2} data={Gogoro[type]} color={color} istoggle={this.state.istoggle} onChange={(data) => this.onChange(data)}/>
            </CarContainer>
          )
        }
      </Swiper>
    )
  }
}