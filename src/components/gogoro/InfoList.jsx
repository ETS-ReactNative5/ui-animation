import React from 'react'
import styled, { keyframes } from "styled-components";
import PerfectScrollbar from 'perfect-scrollbar'
import _ from 'lodash'
import HorizontalScroll from 'react-scroll-horizontal'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px)
  }
`;

const ListSection = styled.div`
  text-align: left;
  padding: 15px 0;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.75s cubic-bezier(0, 0.5, 0.2, 1)
    ${props => (props.delay ? props.delay : `0.75s`)} both;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 1;

    @media screen and (max-width: 768px) {
      font-size: 20px !important;
    }
  }
  h3 {
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 5px 0 0 3px;
    text-transform: uppercase;
  }


  @media screen and (max-width: 768px) {
    padding: 5px 0 15px 0px;
  }
`;

const List = styled.div`
  margin-top: 10px;
  display: flex;
  padding: 10px 2.5px;
  overflow: scroll;
  width: 100%;

  > div {
    width: auto;
    display: flex;
  }

  &#aboutContainer {
    position: relative;

    .ps__rail-x,
    .ps__rail-y {
      position: absolute;
    }
  }
`;

const Box = styled.div`
  width: ${props => (props.w ? props.w : `320px`)};
  height: ${props => (props.h ? props.h : `200px`)};
  border-radius: 5px;
  background: ${props =>
    props.src ? props.src : `linear-gradient(to bottom left, #eee, #ddd);`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 20px;

  box-shadow: ${props =>
    props.boxShadow ? props.boxShadow : `1px 5px 10px rgba(0, 0, 0, 0.2)`};
  overflow: hidden;

  > img {
    width: 100%;
    height: auto;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  > h4 {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }

  > p {
    font-size: 14px;
    line-height: 1.5;
  }
`
const StyledScrollArea = styled(HorizontalScroll)`
  min-height: 300px;
`
export default class InfoList extends React.Component {
  state = {}

  componentDidMount () {
    new PerfectScrollbar('#aboutContainer');
  }
  render () {
    return (
      <ListSection delay={`1s`}>
          <h2>關於 About</h2>
          <List id="aboutContainer">
            <StyledScrollArea
              reverseScroll = {true}
            >
              {_.map(this.props.data, (f, id) => (
                <Box
                  key={id}
                  w={`250px`}
                  h={`auto`}
                  src={`white`}
                  boxShadow={`none`}>
                  <img src={f.img} alt={f.img} />
                  <Information>
                    <h4>{f.title || `title`}</h4>
                    <p>{f.content || `content`}</p>
                  </Information>
                </Box>
              ))}
            </StyledScrollArea>
          </List>
      </ListSection> 
    )
  }
}