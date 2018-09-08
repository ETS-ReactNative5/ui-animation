import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css"
import RowSwiper from 'components/gogoro/RowSwiper.jsx'

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
      bottom: 15px;
      left: 50px;
      width: calc(100% - 100px);
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

export default class GogoroMarket extends React.Component {
  render () {
    return (
        <Section className="section">
          <Header
            color={`#50514F`}
            counter={3}
            title={`Gogoro-market`}
          />
          <Wrapper className="wrapper">
            <RowSwiper />
          </Wrapper>
        </Section>    
    )
  }
}