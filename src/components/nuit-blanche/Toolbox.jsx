import React from "react";
import styled, { keyframes } from "styled-components";
import { List, Clipboard } from "react-feather";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-74093364-19')
ReactGA.pageview(window.location.pathname + window.location.search)

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  30% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  position: absolute;
  top: 10px;
  left: 0px;
  z-index: 1;
  animation: ${fadeIn} 0.5s cubic-bezier(0, 0.5, 0.2, 1) both;
  
  display: ${props => (props.active ? `flex` : `none`)};
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.margin ? props.margin : `0`};
  width: ${props => props.width ? props.width : `40px`};
  height: 30px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
`
export default class Toolbox extends React.Component {
  state = {
  };
  _onCopy = () => {
    let link = window.location.href
    ReactGA.event({
      category: '4',
      action: `copy link: #${link}`
    });
  }
  render() {
    return (
      <Wrapper active={!this.props.isToggleList}>
        <IconWrapper onClick={this.props._onToggleList}>
          <List size={18}/>
        </IconWrapper>
        {/* <IconWrapper width={`110px`} margin={`0 0 0 10px`} onClick={this._onCopy}>
          分享行程<Clipboard size={18}/>
        </IconWrapper> */}
      </Wrapper>
    );
  }
}
