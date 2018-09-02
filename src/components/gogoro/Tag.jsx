import React from 'react'
import styled from "styled-components";
import tinycolor from "tinycolor2"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 60px;
  border-radius: 15px;

  font-size: 12px;
  line-height: 1;
  color: ${props => props.color};
  background: ${props => props.bgColor ? props.bgColor : `#50514F`};
`

export default class Tag extends React.Component {
  render () {
    return (
      <Wrapper bgColor={this.props.bgColor} color={tinycolor(this.props.bgColor).isLight() ? `#50514F` : `#EEE`}>
        {this.props.text}
      </Wrapper>
    )
  }
}