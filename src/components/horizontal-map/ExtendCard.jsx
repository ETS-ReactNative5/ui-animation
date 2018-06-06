import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

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
    transition: all 0.25s ease;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
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

`
const Content = styled.div`
  // display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-bottom: 20px;

  h2.swiperTitle {
    color: #50514F;
    font-size: 2rem;
    font-family: "Raleway";
    margin: 10px 0;
    text-align: ${props => props.toggle ? `left` : `center`};
    transition: all 0.25s ease;
  }

  p {
    display: ${props => props.toggle ? `block` : `none`};
    color: #50514F;
    text-align: left;
  }
`
const ImgList = styled.div`
  display: flex;
  margin: ${props => props.toggle ? `20px 0` : `0`};
  justify-content: ${props => props.toggle ? `flex-start` : `center`};
  transition: all 0.25s ease;
  width: 100%;
  height: auto;

  > div {
    margin: 5px;
    border-radius: 5px;
    overflow: hidden;
    width: ${props => props.toggle ? `100px` : `64px`};
    height: ${props => props.toggle ? `100px` : `64px`};
    transition: all 0.25s ease;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
  background: var(--orange);
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
          <Content toggle={this.props.isBoxExtends}>
            <h2 className="swiperTitle">{this.props.cardContent.name}</h2>
            <ImgList toggle={this.props.isBoxExtends}>
              {
                _.map(this.props.cardContent.imgList, (figure, id) =>
                  <div key={id} style={{backgroundImage: `url(${figure})`}} />
                )
              }
            </ImgList>
            <div style={{flex: 1}}>
              <p>{this.props.cardContent.content}</p>
            </div>
          </Content>

          <CardBtn
            onClick={() => this.toggleBox(this.props.id)}>
            {this.props.isBoxExtends ? `close` : `read more`}
          </CardBtn>
        </ExtendCardContent>
      </ExtendCardWrapper>
    )
  }
}
