import React from 'react'
import _ from 'lodash'

import Swiper from "react-id-swiper";
import styled, { keyframes } from "styled-components";
import ExtendItem from "components/nuit-blanche/ExtendItem";
import { ArrowRight } from "react-feather";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  30% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const StepsWrapper = styled.div`
  width: 100%;
  height: 130px;
  position: absolute;
  bottom: 0;
  z-index: 0;
  animation: ${fadeIn} 0.5s cubic-bezier(0, 0.5, 0.2, 1) both;

  .swiper-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 15px;
  }
`

const ItemWrapper = styled.div`
  width: ${props => props.width};
  box-sizing: border-box;
`

const Instruction = styled.div`
  padding: 7.5px 7.5px;
  margin: 15px 0 15px 15px;
  width: calc(100% - 15px);
  height: calc(100% - 30px);

  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 18px;
  }

  > div {
    margin-left: 12px;
    width: 100px;
    height: 30px;
    background: #50514F;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    cursor: pointer;
  }
`
export default class MapSteps extends React.Component {
  state = {
    swiper: null,
    steps: []
  }
  swiperRef = ref => {
    this.setState({ swiper: ref.swiper });
  }
  componentDidMount() { }

  componentWillReceiveProps = nextProps => {    
    this.setState({ steps: nextProps.steps })
  }

  _onToggle = id => {
    this.props._onToggleItem(id)
  };

  render() {
    const params = {
      onInit: swiper => {
        this.swiper = swiper;
      },
      on: {
        transitionEnd: () => {
          let activeIndex = this.state.swiper.isEnd ? (this.state.swiper.slides.length - 1) : this.state.swiper.activeIndex
          this.props._onfly(activeIndex)
        }
      },
      shouldSwiperUpdate: true,
      slidesPerView: 'auto'
    };
    return (
      <StepsWrapper>
        <Swiper {...params} ref={this.swiperRef}>
          {
            _.isEmpty(this.props.order) ? (
              <ItemWrapper width={`100%`} onClick={this.props._onToggleList}>
                <Instruction>
                  <h3>還沒決定好去哪嗎?</h3>
                  <div>開始探索<ArrowRight onClick={this.props._onToggleList} color={`white`} size={16} /></div>
                </Instruction>
              </ItemWrapper>
            ) : (
                _.map(this.state.steps, (s, id) =>
                  <ItemWrapper key={id} width={`90%`}>
                    <ExtendItem
                      inMap={true}
                      id={id}
                      key={id}
                      group={s.data.typeContentEn}
                      datum={s.data}
                      isToggle={true}
                      onToggle={() => this._onToggle(s.data.id)}
                    />
                  </ItemWrapper>
                )
              )
          }
        </Swiper>
      </StepsWrapper>
    )
  }
}
