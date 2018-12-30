import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid #5f4b8b;
  position: relative;

  &:after {
    position: absolute;
    top: 5px;
    left: 10px;
    content: ${prop => prop.number > -1 ? `"${prop.number + 1}"` : `"?"`};

    font-size: 3.5vw;
    line-height: 1;
    font-weight: 700;
    font-style: italic;
    font-family: "Rubik", sans-serif;

    letter-spacing: 1px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #5f4b8b;
    color: transparent;
  }
`;

export default class Box extends React.Component {
  render() {
    const { number } = this.props;
    return <Wrapper number={number}/>;
  }
}
