import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Play } from "react-feather";

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
const rotate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg) translateY(20px);
  }
  50% {
    opacity: 1;
    transform: rotate(0deg) translateY(0px);
  }
  100% {
    transform: rotate(360deg) translateY(0px);
  }
`;
const CardWrapper = styled.div`
  width: 100%;
  height: 100px;
  text-align: right;
  text-align: -webkit-right;
  transition: height 0.35s ease;
  z-index: 1;
  transform: rotateX(-25deg) translateX(${props => `${1}rem`});
  transition: height 0s ease, opacity 0.2s linear;
  opacity: 1;

  &.active {
    transform: rotateX(0deg) translateX(${props => `${0}rem`});
    z-index: 9998;
  }

  &.nonactive {
    height: 0;
    opacity: 0;
    transition: height 0.5s ease, opacity 0.2s linear;
  }
`;

const Card = styled.div`
  width: 90%;
  height: 180px;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  font-size: 24px;
  line-height: 1;
  position: relative;

  filter: grayscale(95%);
  transition: all 0.3s ease;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0);

  &:hover,
  &:focus {
    transition: all 0.3s ease;
    box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.35);
    filter: grayscale(0%);
  }

  > .img {
    height: 180px;
    width: 100%;
    border-radius: 10px;
    background: ${props =>
      props.bgSrc
        ? `url('${props.bgSrc}')`
        : `linear-gradient(to bottom left, #efcdcd, #e5a9bb)`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg {
    z-index: -1;
    border-radius: 10px;
    background: var(--GMA29-content-bg);
  }
`;

const ExpandCard = styled.div`
  width: 100%;
  height: var(--GMA29-app-height);
  display: flex;
  flex-direction: column;

  > .img {
    height: calc(var(--GMA29-app-width) * 9 / 16);
    width: var(--GMA29-app-width);
    background: ${props =>
      props.bgSrc
        ? `url('${props.bgSrc}')`
        : `linear-gradient(to bottom left, #efcdcd, #e5a9bb)`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  > .expand-content {
    flex: 1;
    overflow-y: scroll;
  }

  .bg {
    border-radius: 0px;
    background: var(--GMA29-content-bg);
  }
`;

const PlaySection = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const PlayBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid var(--GMA29-black);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 1s cubic-bezier(0, 0.5, 0.2, 1) 0.15s both;
  > svg {
    margin-left: 2.75px;
    fill: white;
    stroke: var(--GMA29-black);
  }
`;

const ListSection = styled.div`
  text-align: left;
  padding: 15px;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.75s cubic-bezier(0, 0.5, 0.2, 1)
    ${props => (props.delay ? props.delay : `0.75s`)} both;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 1;
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
`;

const List = styled.div`
  margin-top: 10px;
  display: flex;
  padding: 10px;
  overflow: scroll;
  width: 100%;

  > div {
    width: auto;
    display: flex;
  }
`;

const Box = styled.div`
  width: ${props => (props.w ? props.w : `320px`)};
  height: ${props => (props.h ? props.h : `180px`)};
  border-radius: 5px;
  background: ${props =>
    props.src ? props.src : `linear-gradient(to bottom left, #eee, #ddd);`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;

  box-shadow: ${props =>
    props.boxShadow ? props.boxShadow : `1px 5px 10px rgba(0, 0, 0, 0.2)`};
`;

const CreditList = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify ? props.justify : `flex-start`};
  height: ${props => props.h ? props.h : `auto`};

  > li {
    list-style: none;
    margin: 2.5px 0;
    font-size: 14px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
`;

const DesignerList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Designer = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 5px;

  > .designer-avator {
    border-radius: 10px;
    border: 1px solid rgba(100, 100, 100, 0.25);
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background: ${props =>
      props.src ? props.src : `linear-gradient(to bottom left, #eee, #ddd);`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  > .designer-intro {
    width: calc(100% - 50px);
    h2 {
      font-weight: 700;
      font-size: 16px;
    }

    h3 {
      margin-top: 5px;
      opacity: 0.5;
      font-size: 14px;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;

const FakeText = styled.div`
  width: 100%;
  height: 12px;
  background: #ddd;
  border-radius: 5px;
  margin: ${props => props.margin ? props.margin : `5px 0`};
`;

export default class GMA29 extends Component {
  state = {
    lastScrollPos: 0
  };
  componentDidMount() {}
  toggleCard = id => {
    // adjust position
    let lastScrollPos = document.getElementsByClassName(`cards`)[0].scrollTop;
    document.getElementsByClassName(`cards`)[0].scrollTop =
      this.props.currentState === `normal` ? 0 : this.state.lastScrollPos;

    this.setState({ lastScrollPos });
    // update state
    this.props.handleToggle(id);
  };
  render() {
    return (
      <CardWrapper
        className={
          this.props.isToggle
            ? this.props.id === this.props.toggleCardId
              ? `active cardwrapper`
              : `nonactive cardwrapper`
            : `cardwrapper`
        }
      >
        <Card
          className={`card`}
          params={this.props.id}
          bgSrc={this.props.card.bg}
          onClick={() => this.toggleCard(this.props.id)}
        >
          <div className="bg" data-flip-key={`bg-${this.props.id}`} />
          <div className="img" data-flip-key={`img-${this.props.id}`} />
        </Card>

        <ExpandCard className="expand-card" bgSrc={this.props.card.bg}>
          <div className="bg" data-flip-key={`bg-${this.props.id}`} />
          <div
            className="img"
            data-flip-key={`img-${this.props.id}`}
            onClick={() => this.toggleCard(this.props.id)}
          />
          <div className="expand-content">
            <PlaySection>
              <PlayBtn>
                <Play size={20} />
              </PlayBtn>
            </PlaySection>

            <ListSection>
              <h2>介紹</h2>
              <h3>intro</h3>
              <List>
                <div>
                  <Box w={`320px`} h={`100%`} src={`white`}>
                    <DesignerList>
                      {this.props.card.designerList.map((d, id) => (
                        <Designer key={id} src={`url('${d.src}')`}>
                          <div className="designer-avator" />
                          <div className="designer-intro">
                            <h2>{d.title}</h2>
                            <h3>{d.brief}</h3>
                          </div>
                        </Designer>
                      ))}
                    </DesignerList>
                  </Box>
                  <Box w={`320px`} h={`180px`} src={`white`}>
                    <CreditList justify={`space-between`} h={`100%`}>
                      {new Array(6).fill(0).map((f, id) => <FakeText key={id}/>)}
                    </CreditList>
                  </Box>
                  <Box w={`320px`} h={`180px`} src={`white`}>
                    <CreditList justify={`space-between`} h={`100%`}>
                      {new Array(6).fill(0).map((f, id) => <FakeText key={id}/>)}
                    </CreditList>
                  </Box>
                </div>
              </List>
            </ListSection>

            <ListSection delay={`1s`}>
              <h2>入圍作品</h2>
              <h3>nominations</h3>
              <List>
                <div>
                  {this.props.card.nominationList.map((n, id) => (
                    <Box
                      key={id}
                      w={`320px`}
                      h={`180px`}
                      src={`url('${n.src}')`}
                    />
                  ))}
                </div>
              </List>
            </ListSection>

            <ListSection delay={`1.25s`}>
              <h2>製作團隊</h2>
              <h3>Credit list</h3>
              <List>
                <div>
                  <Box
                    w={`100%`}
                    h={`100%`}
                    src={`transparent`}
                    boxShadow={`none`}
                  >
                    <CreditList>
                      {this.props.card.creditList.map((c, id) => (
                        <li key={id}>
                          <strong>{c.name}</strong>{c.value}
                        </li>
                      ))}
                      {new Array(6).fill(0).map((f, id) => <FakeText key={id} margin={`7.5px 0`}/>)}
                    </CreditList>

                  </Box>
                </div>
              </List>
            </ListSection>
          </div>
        </ExpandCard>
      </CardWrapper>
    );
  }
}
