import React from 'react'
import styled from "styled-components";
import Header from "components/header/peter.jsx";
import Frame from 'components/peter-huang-photo/Frame.jsx'
import "bulma/css/bulma.css"
import _ from 'lodash'

let currentPixel = 0 // window.pageXOffset

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
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

  height: calc(100vh - 50px); // var(--Peter-Huang-Photo-height);
  width: auto;

  transition: transform 0.25s;
  will-change: transform;

  &::-webkit-scrollbar { 
    display: none; 
  }

`

export default class Photo extends React.Component {
  state = {
    photos: []
  }
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef()
  }
  componentDidMount() {
    this.looper()
    this.fetchPhoto()
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

  fetchPhoto = () => {
    const access_token = '5559280059.1677ed0.962c5607674440cd80f1f363a31cfd48'
    const count = 10
    fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${access_token}`, {
      data: {
        access_token,
        count
      }
    })
      .then(res=> res.json())
      .then(res => {
        this.setState({ photos: res.data.slice(0, 10) })
      })
      .catch((err) => console.log(err))
  }
  render() {
    const { photos } = this.state
    return (
      <Section className="section">
        <Header
          color={`#50514F`}
          counter={5}
          title={`Simple-Aesthetic/Taipei-Based `}
        />
        <Wrapper className="wrapper" innerRef={this.wrapperRef}>
          {
            _.map(photos, (photo) => <Frame id={photo.id} idx={photo.id} src={photo.images.standard_resolution.url} rowStart={11} rowLen={10} colStart={8} colLen={14} title={photo.tags[0]} titleColSrart={1} titleColLen={2} titleRowSrart={3} titleRowLen={2}/>)
          }
          {/*
            <Frame idx={0} src={require('assets/peter-huang-photo/cell.jpg')} rowStart={12} rowLen={10} colStart={8} colLen={14} title={`Cell Building`} titleColSrart={1} titleColLen={2} titleRowSrart={3} titleRowLen={2}/>
            <Frame idx={1} src={require('assets/peter-huang-photo/mountain.jpg')} rowStart={8} rowLen={10} colStart={7} colLen={14} title={`Sunrise`} titleColSrart={4} titleColLen={2} titleRowSrart={19} titleRowLen={2}/>
            <Frame idx={2} src={require('assets/peter-huang-photo/church.jpg')} rowStart={8} rowLen={15} colStart={8} colLen={9} title={`Copenhagen`} titleColSrart={4} titleColLen={2} titleRowSrart={3} titleRowLen={2}/>
          */}
        </Wrapper>
      </Section>
    )
  }
}