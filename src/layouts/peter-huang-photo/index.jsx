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
  width: var(--Peter-Huang-Photo-width);

  transition: transform 0.5s;
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
      const speed = diff * 1
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
          <Frame idx={0} src={require('assets/peter-huang-photo/cell.jpg')}/>
          <Frame idx={1} src={require('assets/peter-huang-photo/mountain.jpg')}/>
          <Frame idx={2} src={require('assets/peter-huang-photo/church.jpg')}/>
        </Wrapper>
      </Section>
    )
  }
}