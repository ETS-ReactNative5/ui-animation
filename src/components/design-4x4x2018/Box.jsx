import React from "react";
import styled from "styled-components";
import Rx from "rxjs/Rx";
import _ from "lodash";

const Design4x4 = `#F56452`;

function generateFontSize(source) {
  let size = 100 / source.match(/[\u00ff-\uffff]|\S+/g).length;
  return size < 24 ? 24 : size;
}
const Wrapper = styled.div`
  border: 2px solid ${prop => prop.isEmpty ? `transparent` : Design4x4};
  position: relative;
  transition: all 0.25s;
  background: ${prop => (prop.isFull ? Design4x4 : `transparent`)};
  color: ${prop => (prop.isFull ? `#fff` : Design4x4)};
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${prop =>
    prop.title ? `${generateFontSize(prop.title)}px` : `24px`};
  &:after {
    position: absolute;
    top: 5px;
    left: 10px;
    content: ${prop => (prop.number > -1 ? `"${prop.number + 1}"` : `"?"`)};

    font-size: 3.5vw;
    line-height: 1;
    font-weight: 700;
    font-style: italic;
    font-family: "Rubik", sans-serif;

    letter-spacing: 1px;
    -webkit-text-stroke-width: ${prop => (prop.isFull ? `0.5px` : `2px`)};
    -webkit-text-stroke-color: ${prop => (prop.isFull ? `#fff` : Design4x4)};
    color: #fff;
  }
`;

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.boxRef = React.createRef();
  }
  componentDidMount() {
    this.hoverChecker();
  }
  hoverChecker = () => {
    const node = this.boxRef.current;
    const cursorList = document.getElementsByClassName("cursor");
    const { source } = this.props
    if (node) {
      const mouseOver$ = Rx.Observable.fromEvent(node, "mouseenter");
      mouseOver$.subscribe(e => {
        _.map(cursorList, cursor => {
          cursor.classList.add(`active`);
        });
        cursorList[0].style = `background-image: url('${source}');`;
      });

      const mouseLeave$ = Rx.Observable.fromEvent(node, "mouseleave");
      mouseLeave$.subscribe(e => {
        _.map(cursorList, cursor => {
          cursor.classList.remove(`active`);
        });
        cursorList[0].style = `background-image: ''`;
      });
    }
  };

  render() {
    const { number, isFull, title, isEmpty } = this.props;
    return (
      <Wrapper
        number={number}
        innerRef={this.boxRef}
        isFull={isFull}
        isEmpty={isEmpty}
        title={title}
      >
        {title}
      </Wrapper>
    );
  }
}
