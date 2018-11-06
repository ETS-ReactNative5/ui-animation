import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import Frame from 'components/peter-huang-photo/Frame.jsx'
import "bulma/css/bulma.css"

let currentPixel = 0 // window.pageXOffset

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media screen and (max-width: 768px) {
    height: calc(100vh);
    padding: 0 !important;
  }
`;

const Wrapper = styled.div`
	overflow: scroll;
	overflow-y: hidden !important;
	white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  height: var(--Peter-Huang-Photo-height);
  width: auto;

  transition: transform 0.25s;
  will-change: transform;

  &::-webkit-scrollbar { 
    display: none; 
  }

`

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef()
  }
  componentDidMount() {
    this.looper()
  }

  looper = () => {
    const node = this.wrapperRef.current

    if (node) {
      const newPixel = node.scrollLeft
      const diff = newPixel - currentPixel
      const _speed = diff * 0.5
      const speed = _speed > 10 ? 10 : (_speed < -10 ? -10 : _speed)
      node.style.transform = `skew(${speed}deg)`

      currentPixel = newPixel

      requestAnimationFrame(this.looper)
    }
  }
  render() {
    return (
      <Section className="section">
        <Header
          color={`#50514F`}
          counter={5}
          title={`Peter-Huang-photo`}
        />
        <Wrapper className="wrapper" innerRef={this.wrapperRef}>
          <Frame idx={0} src={require('assets/peter-huang-photo/cell.jpg')} rowStart={12} rowLen={10} colStart={8} colLen={14} title={`Cell Building`} titleColSrart={1} titleColLen={2} titleRowSrart={3} titleRowLen={2}/>
          <Frame idx={1} src={require('assets/peter-huang-photo/mountain.jpg')} rowStart={8} rowLen={10} colStart={7} colLen={14} title={`Sunrise`} titleColSrart={4} titleColLen={2} titleRowSrart={19} titleRowLen={2}/>
          <Frame idx={2} src={require('assets/peter-huang-photo/church.jpg')} rowStart={8} rowLen={15} colStart={8} colLen={9} title={`Copenhagen`} titleColSrart={4} titleColLen={2} titleRowSrart={3} titleRowLen={2}/>
        </Wrapper>
      </Section>
    )
  }
}