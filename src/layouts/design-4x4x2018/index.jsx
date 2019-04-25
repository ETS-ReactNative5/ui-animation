import React from "react";
import styled from "styled-components";
import Header from "components/header";
import Box from "components/design-4x4x2018/Box.jsx";
import Rx from "rxjs/Rx";
import "bulma/css/bulma.css";
import { data } from "./data.js";
import _ from "lodash";

const Design4x4 = `#F56452`;
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
  * {
    cursor: none;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 864px;
  max-height: 864px;
  background: transparent;
  display: grid;
  grid-template-columns: repeat(4, 1fr [col-start]);
  grid-template-rows: repeat(4, 1fr [row-start]);
  grid-gap: 5px;
  @media screen and (max-width: 1920px) {
    max-width: 640px;
    max-height: 640px;  
  }
`;

const Cursor = styled.div`
  --size: 8px;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  position: absolute;
  z-index: 10000;
  transform: translate(-50%, -50%);
  pointer-events: none;

  &.cursor-shadow {
    background-color: transparent;
    border: 1px solid #50514f;
    --size: 40px;
    transition: top 0.1s, left 0.1s, width 0.1s, height 0.1s,
      background-color 0.1s, border-color 0.1s;
    transition-timing-function: ease-out;

    &.active {
      --size: calc(864px / 3);
      border-color: rgba(255, 255, 255, 0);
      background-color: rgba(255, 255, 255, 0.1);

      border-color: rgba(0, 0, 0, 0.1);
      border-width: 1px;
      background-color: transparent;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      z-index: 1;
    }
  }
  &.cursor-dot {
    background: ${Design4x4};
    transition: width 0.2s, height 0.2s;

    &.active {
      opacity: 0.5;
      /* --size: 0; */
    }
  }
`;

export default class Design4x4x2018 extends React.Component {
  componentDidMount() {
    this.mouseListener();
  }
  mouseListener = () => {
    const docElm = document.documentElement;
    const cursorList = document.getElementsByClassName("cursor");

    const mouseMove$ = Rx.Observable.fromEvent(docElm, "mousemove");

    mouseMove$.subscribe(e => {
      _.map(cursorList, cursor => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    });
  };
  render() {
    return (
      <Section className="section">
        <Header color={`#50514F`} counter={6} title={`2018 design 4x4`} />
        <Wrapper>
          {_.map(data, (datum, id) => (
            <Box
              key={id}
              number={id}
              isFull={datum.isFull ? datum.isFull : false}
              isEmpty={datum.isEmpty ? datum.isEmpty : false}
              title={datum.title}
              source={datum.source}
              intro={datum.intro ? datum.intro : null}
            />
          ))}
        </Wrapper>
        <Cursor className="cursor cursor-shadow" />
        <Cursor className="cursor cursor-dot" />
      </Section>
    );
  }
}
