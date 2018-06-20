import React, { Component } from 'react'
import styled from 'styled-components'
// import _ from 'lodash'
import Flipping from 'flipping/dist/flipping.web.js'
const h = document.body.clientHeight
const w = document.body.clientWidth

const Wrapper = styled.div`
  z-index: ${props => props.zIndex ? 1 : 0};

  .card-normal,
  .card-expand {
    display: none;
    position: absolute;
    box-sizing: border-box;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &[data-state="normal"] {
    > .card-normal {
      display: flex;
      position: relative;
    }
  }

  &[data-state="expand"] {
    > .card-expand {
      display: flex;
      position: relative;
    }
  }

  &.swiper-slide {
    width: 100%;
    height: 100%;
  }
`

const NormalCard = styled.div`
  width: 100%;
  height: 100%;
  transform: scale(0.75);
  padding: 10px 0;

  text-align: center;
  font-size: 18px;
  overflow: hidden;

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  transition: all 0.25s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

  .bg {
    background-color: var(--orange);
  }

  h1 {
    padding-left: 20px;
  }
`

const ExpandCard = styled.div`
  width: calc(${w}px);
  height: calc(${h}px);
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  --bg: rgba(200, 200, 200, 0.25);
  .bg {
    background-color: var(--bg);
  }
`

export default class ExtendCard extends Component {
  state = {
    dataState: `normal`,
    flipping: null
  }
  toggleBox = (id) => {
    this.props.toggleBox(id)
    // FLIP
    this.state.flipping.read()
    this.setState({
      dataState: this.state.dataState === `normal` ? `expand` : `normal`
    })
    this.state.flipping.flip()
  }
  componentDidMount () {
    this.setState({ flipping: new Flipping() })
  }
  render () {
    return (
      <Wrapper
        onClick={() => this.toggleBox(this.props.key)}
        zIndex={this.props.isActive}
        data-state={this.state.dataState}
        className={`swiper-slide`}>

        <NormalCard className="card-normal">
          <div className="bg" data-flip-key={`bg-${this.props.id}`}/>
          <h1 className="title" data-flip-key={`title-${this.props.id}`}>Card Title</h1>
        </NormalCard>

        <ExpandCard className="card-expand">
          <div className="bg" data-flip-key={`bg-${this.props.id}`}/>
          <h1 className="title" data-flip-key={`title-${this.props.id}`}>Card Title</h1>
        </ExpandCard>
      </Wrapper>
    )
  }
}
