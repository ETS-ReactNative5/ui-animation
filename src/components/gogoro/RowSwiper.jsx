import React from 'react'
import Swiper from "react-id-swiper";
import ColSwiper from 'components/gogoro/ColSwiper.jsx'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  position: relative;
  border-radius: 10px;
`

export default class RowSwiper extends React.Component {
  state = {}
  render () {
    const RowParams = {
      pagination: {
        el: '.row-swiper-pagination',
        type: 'progressbar',
      },
      slidesPerView: 'auto',
      spaceBetween: 10,
    }
    return (
      <Swiper {...RowParams}>
        {
          [0, 1, 2].map((d) => 
            <Wrapper key={d}>
              <ColSwiper id={d}/>
            </Wrapper>
          )
        }
      </Swiper>
    )
  }
}