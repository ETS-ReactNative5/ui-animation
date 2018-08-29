import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css"

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
  background: #FFDA56;
  position: relative;
`
const CarGallery = styled.div`
  width: 100%;
  height: 100%;
`

const PictureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 50%;
    transform: translateY(-50%) scale(1.25);
  }
`
const CarInfo = styled.div`
  position: absolute;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* this can be change */
  padding: 10px;
  bottom: 0px;

  .info {
    width: 100%;
    height: 100%;
    border-radius: 12.5px;
    background: white;
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

          <Wrapper>
            <CarContainer>
              <CarGallery>
                <PictureWrapper>
                  <img src={require(`assets/gogoro/g-a1-base.png`)}/>
                  <img src={require(`assets/gogoro/g-a1-seatex-stdwhite.png`)} />
                  <img src={require(`assets/gogoro/g-a1-shellf-stdwhite.png`)} />
                  <img src={require(`assets/gogoro/g-a1-visor-std.png`)} />
                </PictureWrapper>
              </CarGallery>

              <CarInfo>
                <div className="info"></div>
              </CarInfo>
            </CarContainer>
          </Wrapper>
        </Section>    
    )
  }
}