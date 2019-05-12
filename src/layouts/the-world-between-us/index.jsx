import React from "react";
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css";
import "./slide.css"
import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import image1 from "../../assets/the-world-between-us/1.jpg";
import image2 from "../../assets/the-world-between-us/2.jpg";

const slidesData = [
  {
    image: image1,
    title: "Segovia",
    meta: "Spain / Castile and León"
  },
  {
    image: image2,
    title: "Barcelona",
    meta: "Spain / Catalonia"
  }
];
const slides = new Slides(slidesData);
const showcase = new Showcase(slidesData, {
  onActiveIndexChange: activeIndex => {
    slides.onActiveIndexChange(activeIndex);
  },
  onIndexChange: index => {
    slides.onMove(index);
  },
  onZoomOutStart: ({ activeIndex }) => {
    slides.appear();
  },
  onZoomOutFinish: ({ activeIndex }) => {},
  onFullscreenStart: ({ activeIndex }) => {
    slides.disperse(activeIndex);
  },
  onFullscreenFinish: ({ activeIndex }) => {}
});

const Section = styled.section`
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #131319;
  @media screen and (max-width: 768px) {
    height: calc(100vh);
    padding: 0 !important;
  }
`;

export default class TheWorldBetweenUs extends React.Component {
  componentDidMount() {
    const container = document.getElementById("lab-7");
    showcase.mount(container);
    slides.mount(container);
    showcase.render();

    window.addEventListener("resize", () => {
      showcase.onResize();
    });

    window.addEventListener("mousemove", ev => {
      showcase.onMouseMove(ev);
    });
  }
  render() {
    return (
      <Section className="section" id="lab-7">
        <Header color={`#FFF`} counter={7} title={`The World Between Us`} style={{ 'zIndex': 1 }} />
      </Section>
    );
  }
}
