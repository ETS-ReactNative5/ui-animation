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
`
const CarContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.bgColor ? props.bgColor : '#FFDA56'};
  position: relative;

  transition: background 0.2s ease;
`
const CarGallery = styled.div`
  width: 100%;
  height: 100%;
  .swiper-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .swiper-wrapper {
      width: 100%;
      height: 100%;
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
    type: `gp1`,
    color: `white`,
    bgColor: `#FFDA56`
  }
  onChange = (data) => {
    let { type, color, bgColor } = data
    this.setState({type, color, bgColor})
  }
  render () {
    let { type, color, bgColor } = this.state
    const params = {
      spaceBetween: this.state.isBoxExtends ? 0 : -75,
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: () => {}
      },
      onInit: swiper => {
        this.swiper = swiper;
      }
    };
    return (
        <Section className="section">
          <Header
            color={`#50514F`}
            counter={3}
            title={`Gogoro-market`}
          />
          <Wrapper className="wrapper">
            <CarContainer bgColor={bgColor}>
              {/* CarGallery */}
              <CarGallery>
                <Swiper {...params}>
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
              <CarInfo data={Gogoro[type]} color={color} onChange={(data) => this.onChange(data)}/>
            </CarContainer>
          </Wrapper>
        </Section>    
    )
  }
}