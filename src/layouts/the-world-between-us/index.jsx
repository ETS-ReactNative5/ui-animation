import React from "react";
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css";
import "./slide.css"
import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import image1 from "../../assets/the-world-between-us/1.jpeg";
import image2 from "../../assets/the-world-between-us/2.jpg";
import image3 from "../../assets/the-world-between-us/3.jpg";
import image4 from "../../assets/the-world-between-us/4.jpg";
import image5 from "../../assets/the-world-between-us/5.jpg";
import image6 from "../../assets/the-world-between-us/6.jpg";
import image7 from "../../assets/the-world-between-us/7.jpg";


const slidesData = [
  {
    image: image1,
    title: "受害者",
    meta: "我們與惡的距離/"
  },
  {
    image: image3,
    title: "母親節",
    meta: "我們與惡的距離/"
  },
  {
    image: image4,
    title: "裂痕",
    meta: "我們與惡的距離/"
  },
  {
    image: image6,
    title: "病識感",
    meta: "我們與惡的距離/"
  },
  {
    image: image2,
    title: "罪人",
    meta: "我們與惡的距離/"
  },
  {
    image: image5,
    title: "槍響之後",
    meta: "我們與惡的距離/"
  },
  {
    image: image7,
    title: "霸凌",
    meta: "我們與惡的距離/"
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
