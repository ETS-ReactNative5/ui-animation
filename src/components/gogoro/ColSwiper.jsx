import React from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import CarInfo from 'components/gogoro/Info';
import { Gogoro } from 'layouts/gogoro-market/data.js';
import _ from 'lodash'

const CarContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.bgColor ? props.bgColor : '#FFDA56'};
  position: relative;
  border-radius: 10px;
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
      position: relative;
    }

    .swiper-pagination  {
      top: 2%;
      transform: translate3d(0, 0,0) !important;
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid white;
        margin: 8px 4px;
        background: transparent;
        border: 1px solid white;
        opacity: .75;
        overflow: hidden;
        color: transparent;

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

`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  user-select: none;
  transform: translateY(-50%) scale(${props => props.scale});
  transition: 0.1s ease transform
`
export default class ColSwiper extends React.Component {
  state = {
    swiper: null,
    istoggle: false,
    type: this.props.id,
    color: null,
    bgColor: null,
    scale: 1.5
  }
  onToggle = () => {
    this.setState({ istoggle: !this.state.istoggle })
  }
  swiperRef = ref => {
    this.setState({ swiper: ref.swiper });
  }
  onChange = (data) => {
    let { type, color, bgColor } = data
    this.setState({type, color, bgColor})
  }
  setScale = (value) => {
    this.setState({ scale: value > 1.5 ? 1.5 : value })
  }
  componentDidMount () {
    let _color = Object.keys(this.props.data[`list`])[0]
    let defaultCar = this.props.data[`list`][_color]
    let { bgColor, color, img } = defaultCar
    this.setState({ bgColor, color, img })
  }
  render() {
    const params = {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}">${index}</span>`;
        },
      },
      on: {
        touchMove: (event) => {
          let { color, type } = this.state
          let totalLen = Gogoro[type][`list`][color][`img`].length
          if(event.movementY < -30 && this.state.swiper.activeIndex + 1 === totalLen) {
            console.log(`it toggle end`);
          }
        }
      },
      onInit: swiper => {
        this.swiper = swiper;
      }
    }
    let { bgColor, color, type } = this.state
    if (color === null) return `loading...`
    return (
      <CarContainer bgColor={bgColor}>
        {/* CarGallery */}
        <CarGallery>
          <Swiper {...params} ref={this.swiperRef}>
            {
              _.map(Gogoro[type][`list`][color][`img`], (list, id) => (
                <PictureWrapper key={id}>
                  {
                    _.map(list, (i, imgId) => <Image key={imgId} src={i} alt={i} scale={this.state.scale}/>)
                  }
                </PictureWrapper>
              ))
            }
          </Swiper>
        </CarGallery>
        {/* Info */}
        <CarInfo
          zIndex={2}
          id={type}
          color={color}
          data={Gogoro[type]}
          istoggle={this.state.istoggle}
          setScale={(e) => this.setScale(e)}
          onChange={(data) => this.onChange(data)}
        />
      </CarContainer>
    );
  }
}
