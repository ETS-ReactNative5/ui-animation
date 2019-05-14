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
    image: image1,
    title: "受害者",
    meta: "我們與惡的距離 ep1",
    mention: `李曉明在戲院開槍犯下無差別殺人事件之後的兩年，被最高法院駁回上訴判死刑定讞。\n
    品味新聞台的副總監宋喬安與先生劉昭國，工作上理念不同加上兒子意外被李曉明槍殺，夫妻關係瀕臨崩解，宋喬安暴躁易怒求完美的個性，讓屬下敬而遠之，而一場意外讓新進品味新聞台兩個月的助理編輯大芝，成為喬安的手下編輯。\n
    很沒存在感的大芝，不知道該如何與人相處，還好個性樂觀的二房東思悅總是對大芝特別照顧，這天思悅的弟弟思聰搬來，怪裡怪氣的思聰，思悅跟大芝不知該如何應對！\n
    大芝戰戰兢兢的與喬安工作著，卻沒料到喬安是她最不想碰到的人...
    `
  },
  {
    image: image2,
    title: "母親節",
    meta: "我們與惡的距離 ep2",
    mention: `大芝決定遞辭呈，煩躁收視與人事的喬安不耐對大芝，想辭就辭。\n
    幼稚園發生了疑似精神病患劫持幼童事件，喬安駁斥上司的搶快要求，堅持要等幼童安全才live連線，臨時找不到精神科醫生的第二現場，喬安用人情施壓請妹夫一駿上場！\n
    王赦與老婆美媚在幼稚園外焦急等候在幼稚園內的女兒，大芝在副控室看到幼稚園的現場畫面，熟識的面孔被警察架出來...
    `
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
    meta: "我們與惡的距離ep6",
    mention: `品味新聞獨家拍到了李家父母與大芝接曉明遺體過程，曝光李家父母居住場所，大芝回品味痛罵喬安才是媒體沈淪的禍首，與喬安爆衝突。\n
    美媚決定回到王赦身邊，支持王赦理念，一家人準備接受小寶寶的到來。\n
    昭國在心理諮商師建議下，帶著喬安回到當初約會的起點，卻也是兒子出事的戲院，喬安不得不面對埋在心底的悔恨。\n
    準備結婚的思悅百般容忍未婚夫母親的財大氣粗，應家人準備接思聰出院，不料應父卻心肌梗塞，思悅決定讓思聰搬過來跟自己住。
    `
  },
  {
    image: image7,
    title: "霸凌",
    meta: "我們與惡的距離ep7",
    mention: `思悅與凱子頻起爭端，凱子不希望因為思聰而讓兩人多年感情生變，應父又住院，思悅逼自己冷靜處理所有事務，還好有大芝的陪伴協助。大芝回到品味辦辭職，選擇跟喬安道歉。
    一個國中生在路上模仿李曉明砍傷人，遭到媒體大幅報導，國中生母親不滿媒體的偏頗，帶著兒子失聯，引發民眾關注，喬安因這事件重新思索媒體人的定位。\n
    陳昌被判無期徒刑，社會觀感大反彈，王赦再度成為網民私訊攻擊對象，王赦不以為意，卻沒發現美媚成了驚弓之鳥。`
  },
  {
    image: image8,
    title: "眾生皆有病",
    meta: "我們與惡的距離 ep8",
    mention: `喬安聯合News哥，試著改變品味的新聞模式，但必須面臨收視率的檢驗。\n
    美媚早產，夫妻倆人對於小小早產嬰兒的急救措施有不同見解，王赦被岳父痛罵自私害妻小受驚，王赦決心要給美媚與孩子一個無憂的環境。\n
    懷孕的喬平與一駿，在精神科的工作小組裡展開社工與醫生的理念之爭，兩人對於意外懷孕破壞頂客生活也有不同想法。思聰開始了同學介紹的攝影工作，服用藥物後的遲緩，讓自我要求頗高的思聰頗受挫折。\n
    大芝巧遇差一點成為男友的學長卯帥，思悅鼓勵大芝與學長相約。思悅與凱子近距離的相處，反而日起爭端，而思聰工作不順漸受幻聽干擾而失序。`
  },
  {
    image: image9,
    title: "黎明之前",
    meta: "我們與惡的距離 ep9",
    mention: `媒體圍勦思悅飲料店想拍大芝，大芝等躲店內坐困愁城。事後大芝憤找學長卯帥理論，思聰為大芝打抱不平。\n
    思悅想找醫院諮詢思聰不吃藥該怎麼辦，卻求救無門。與凱子兩人則對未來完全不同調。\n
    喬平與一駿也面臨工作、家庭的瓶頸。喬安News哥改革品味新聞似有成果，不料品味新聞台易主，喬安等必須面對新老闆對新聞自主的干涉。\n
    王赦拿很多錢回家希望美媚繼續無憂主婦生活，美媚感覺到王赦的改變。\n
    大芝的身分及工作地點被媒體曝光，招來更多的意外，思聰再度失控，只是這次兩女卻無法阻止。`
  },
  {
    image: image10,
    title: "未來的樣子",
    meta: "我們與惡的距離 ep10",
    mention: `思聰發病失蹤，思悅、大芝大受驚嚇四處尋找。\n
    喬安無預警被調職，決定找最近抑鬱的喬平聊聊，卻遇到大芝，意外看見精神科醫護人員有驚有險的日常。\n
    美媚找王赦懇談，希望找回當初帥氣自信的先生；王赦開始尋找李曉明事件的受害者，希望讓李家父母當面致歉修復傷痛。\n
    喬安昭國一家人去度假，喬安終於坦然面對失去天彥的心情，也思考自己媒體人的角色該何去何從。\n
    喬平、一駿在思聰事件的刺激下，達成未來新共識。思悅、大芝互相扶持，面對店內的生意無起色，兩女無奈。\n
    三年後眾人的人生會變成什麼樣貌...
    `
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
      </Section>
    );
  }
}
