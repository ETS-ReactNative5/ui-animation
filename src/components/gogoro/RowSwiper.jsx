import React from 'react'
import Swiper from "react-id-swiper";
import ColSwiper from 'components/gogoro/ColSwiper.jsx'
import styled from "styled-components";
import { Gogoro } from 'layouts/gogoro-market/data.js';
import _ from 'lodash'

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
          _.map(Gogoro, (type, d) => 
            <Wrapper key={d}>
              <ColSwiper id={d} data={type}/>
            </Wrapper>
          )
        }
      </Swiper>
    )
  }
}