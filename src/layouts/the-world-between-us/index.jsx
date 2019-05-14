import React from "react";
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css";
import "./slide.css";
import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import _ from "lodash";
import Rx from "rxjs/Rx";
import video1 from "../../assets/the-world-between-us/1.mp4";
import image1 from "../../assets/the-world-between-us/1.jpg";
import image2 from "../../assets/the-world-between-us/2.jpg";
import image3 from "../../assets/the-world-between-us/3.jpg";
import image4 from "../../assets/the-world-between-us/4.jpg";
import image5 from "../../assets/the-world-between-us/5.jpg";
import image6 from "../../assets/the-world-between-us/6.jpg";
import image7 from "../../assets/the-world-between-us/7.jpg";
import image8 from "../../assets/the-world-between-us/8.jpg";
import image9 from "../../assets/the-world-between-us/9.jpg";
import image10 from "../../assets/the-world-between-us/10.jpg";

const Design4x4 = "tomato";
const slidesData = [
  {
    image: video1,
    title: "受害者",
    meta: "我們與惡的距離 ep1"
  },
  {
    image: image2,
    title: "母親節",
    meta: "我們與惡的距離 ep2"
  },
  {
    image: image3,
    title: "裂痕",
    meta: "我們與惡的距離 ep3",
    mention: `思聰被新聞報導為精神不穩欠債失志導演，讓思悅對在新聞台工作的大芝遷怒。\n王赦告知思悅，思聰可能有精神障礙，應該就醫檢查，讓對精神疾病恐慌不解的應家人拒絕。\n
    美媚極度不諒解協助思聰面對檢警的王赦，認為王赦不顧受驚嚇的家人，且幫殺害幼童的變態辯護，這是美媚完全無法忍受的事。\n
    喬安不知如何面對女兒的叛逆，只好請來在精神專科擔任社工、個性溫暖的妹妹喬平勸說，喬平反而希望喬安先解決與昭國之間的怨懟。\n
    大芝回到家中，發現思聰完全失控了.......`
  },
  {
    image: image4,
    title: "病識感",
    meta: "我們與惡的距離 ep4",
    mention: `思聰被強制就醫，一駿初步判定為思覺失調症，就是俗稱的精神分裂，應家人如雷轟頂。\n
    殺兩幼童的陳昌被專家鑑定再犯風險高，王赦苦於陳昌始終無病識感，不肯用藥，巧遇一駿而求解。美媚帶著孩子回娘家，王赦婚姻陷入僵局。\n
    喬安與女兒天晴在辦公室爆衝突，喬平勸昭國要幫助無病識感的喬安，要一起面對過去的創傷，對天晴才是好的。\n
    大芝眼見哥哥對喬安家的傷害，又看到思悅勇敢面對問題，決定請假回家，希望勸說父母一起找尋哥哥犯罪的原因。\n`
  },
  {
    image: image5,
    title: "罪人",
    meta: "我們與惡的距離 ep5",
    mention: `新聞報導自殺網紅罹患憂鬱症，後續造成精神科大爆滿，\n一駿疲於應付。應家人也因為思聰的後續安排該如何，而起了爭執。\n
    喬安整天火力全開四處罵人，被同事發現異常，昭國一路相伴，兩人的關係有了微妙變化。\n
    王赦終於說服李曉明見家人一起探索過去，且爭取非常上訴！\n沒想到卻傳來李曉明準備行刑的消息，媒體騷動不已，品味新聞大動員，喬安與大芝心情複雜。\n
    王赦醉酒到岳父家，難掩激動的控訴這一切。`
  },
  {
    image: image6,
    title: "槍響之後",
    meta: "我們與惡的距離ep6"
  },
  {
    image: image7,
    title: "霸凌",
    meta: "我們與惡的距離ep7"
  },
  {
    image: image8,
    title: "眾生皆有病",
    meta: "我們與惡的距離 ep8"
  },
  {
    image: image9,
    title: "黎明之前",
    meta: "我們與惡的距離 ep9"
  },
  {
    image: image10,
    title: "未來的樣子",
    meta: "我們與惡的距離 ep10"
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
  * {
    cursor: none;
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
    border: 1px solid #fff;
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

export default class TheWorldBetweenUs extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const container = document.getElementById("lab-7");
      showcase.mount(container);
      slides.mount(container);
      showcase.render();

      this.mouseListener();

      window.addEventListener("resize", () => {
        showcase.onResize();
      });

      window.addEventListener("mousemove", ev => {
        showcase.onMouseMove(ev);
      });
    }, 5000);
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
      <Section className="section" id="lab-7">
        <Header
          color={`#FFF`}
          counter={7}
          title={`The World Between Us`}
          style={{ zIndex: 1 }}
        />
        <Cursor className="cursor cursor-shadow" />
        <Cursor className="cursor cursor-dot" />
        {/* <video id="video" autoPlay controls>
          <source
            src="./../../assets/ths-world-between-us/1.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video> */}
      </Section>
    );
  }
}
