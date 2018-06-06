import React, { Component } from 'react'
import styled from 'styled-components'

const ExtendCardWrapper = styled.div`
  &.swiper-slide {
    transform: scale(${props => props.toggle ? 1 : (props.active ? 0.8 : 0.7)});
    z-index: ${props => props.zIndex ? 1 : 0};
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    transition: 0.25s ease;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

    /* &.nonactive {
      transition: 0.25s ease;
      transform: scale(0.7) translateY(0px);
    } */
  }
`
const ExtendCardContent = styled.div`
  flex: 1;
  width: 100%;
  padding: ${props => props.padding ? '20px' : '0px'};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.25s ease;
  box-shadow: none;
  overflow: hidden;

  h2.swiperTitle {
    color: #50514F;
    font-size: 2rem;
    font-family: "Raleway";
    margin: 10px 0;
  }
`
const CardBtn = styled.div`
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: 100%;
  padding: 15px 0;
  text-align: center;

  color: white;
  background: var(--purple);
  cursor: pointer;
`
export default class ExtendCard extends Component {
  toggleBox = (id) => {
    this.props.toggleBox(id)
  }
  render () {
    return (
      <ExtendCardWrapper
        active={this.props.isActive}
        toggle={this.props.isBoxExtends}
        zIndex={this.props.isActive && this.props.isBoxExtends}
        className={`swiper-slide`}>
        <ExtendCardContent
          padding={this.props.isBoxExtends}
          className={`box`}>
          <h2 className="swiperTitle">Mountain Bike</h2>
          <CardBtn
            onClick={() => this.toggleBox(this.props.id)}>
            select bike
          </CardBtn>
        </ExtendCardContent>
      </ExtendCardWrapper>
    )
  }
}
