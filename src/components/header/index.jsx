import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Logo = styled.a`
  position: absolute;
  top: 40px;
  left: 40px;
  text-decoration: none;
  color: ${props => props.color ? props.color : `white`};

  > h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
  }
`

const Brief = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  text-decoration: none;
  line-height: 1;
  color: ${props => props.color ? props.color : `white`};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
  }

  .divider {
    width: 50px;
    height: 3px;
    background: ${props => props.color ? props.color : `white`};
    margin: 20px 0 10px;
  }

  > a {
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.color ? props.color : `white`};
    font-family: 'Montserrat', sans-serif;
  }
`

const Title = styled.p`
  position: absolute;
  top: 50%;
  left: 25px;
  opacity: 0.5;
  transform-origin: 0 0;
  transform: rotate(-90deg) translate(-50%, 10px);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.color ? props.color : `white`};
`

export default class HeaderComponent extends React.Component {
  render () {
    return (
      <Header id="ui-animation-header">
        <Logo href="/" color={this.props.color}>
          <h1>
            UI
            <br/>
            Motion
            <br/>
            Design
            <br/>
          </h1>
        </Logo>

        <Brief color={this.props.color}>
          <h1>Draft 1</h1>
          <div className="divider" />
          <a href="https://github.io/lichinlin">@lichinlin</a>
        </Brief>

        <Title color={this.props.color}>Japanese Horizontal map</Title>
      </Header>
    )
  }
}
