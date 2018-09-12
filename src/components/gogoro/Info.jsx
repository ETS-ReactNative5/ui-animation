import React from 'react'
import styled from "styled-components";
import Hammer from "hammerjs";
import Rx from 'rxjs/Rx';
import InfoList from 'components/gogoro/InfoList'
import _ from 'lodash'

const CarInfoWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  /* this can be change */
  padding: 10px;
  bottom: 0px;
  z-index: ${props => props.zIndex ? props.zIndex : 1};

  box-sizing: border-box;
`
const CarInfo = styled.div`
  width: 100%;
  min-height: 150px;
  max-height: calc(500px);
  height: ${props => `calc(${props.height})`}; // calc(var(--gogoro-infoHeight));
  padding: 10px 15px;
  border-radius: 12.5px;
  background: white;
  position: relative;

  cursor: -webkit-grab;
  transition: height 0.15s ease;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    max-height: calc(80vh - 50px);
  }
  &.expand {
    overflow: scroll;
    height: calc(80vh - 0px);
  }
  .content {
    opacity: ${props => props.isExpand ? 1 : 0};
    transform: translateY(${props => props.isExpand ? 0 : `50px`});
    transition: 0.25s ease all;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-size: 20px;
    color: #222;
    margin-bottom: 2.5px;
  }
`
const Colors = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
  
const Dot = styled.div`
  list-style: none;
  margin: 4px 8px 4px 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${props => props.color === `white` ? `#ddd` : props.color };
  background: ${props => props.color};
  cursor: pointer;
`
const Content = styled.div``
const BuyCarSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px;

  z-index: 999;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  /* border-top: 1px solid rgb(235, 235, 235); */
  border-bottom-left-radius: 12.5px;
  border-bottom-right-radius: 12.5px;
  background: white;
  cursor: default;
`
const BuyButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex: 1;
  font-size: 16px;
  padding: 12px 8px;
  border-radius: 4px;
  color: white;
  background: ${props => props.color ? props.color : `#A61D55`};
`
const Price = styled.div`
  margin: 4px 0;
  font-size: 14px;
  color: #444;

  flex: 1;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(235, 235, 235) !important;
  margin: 20px 0;
`

export default class Info extends React.Component {
  state = {
    threshold: 150,
    initH: 150,
    expandH: 550,
    isExpand: false,
    currentHeight: `150px`,
    data: this.props.data[`list`],
    title: this.props.data[`title`],
    price: this.props.data[`price`],
    color: this.props.color,
    istoggle: false
  }

  componentDidMount () {
    this.setInfoDragger()
  }
  componentWillReceiveProps = nextProps => {
    this.setState({ istoggle: nextProps.istoggle })
  }
  setInfoDragger = () => {
    const initialState = {
      infoHeight: 0,
      scale: 1.25
    };
    let { initH, expandH, threshold, isExpand } = this.state

    let info = document.querySelector(`.info-${this.props.id}`);
    let hammer = new Hammer(info, { direction: Hammer.DIRECTION_ALL, threshold: 0 });
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    const pan$ = Rx.Observable
    .fromEventPattern((cb) => hammer.on('panend panmove', cb))

    const reducer = (state = initialState, action) => {
      switch (action.type) {

        case 'panmove':
          let _y = isExpand ? -action.deltaY + expandH : -action.deltaY + initH
          return {
            ...state,
            infoHeight: _y < initH ? initH : _y,
            scale: 1.5 + action.deltaY/1000 > 1.5 ? 1.5 : 1.5 + action.deltaY/1000
          };
          
        case 'panend': {
          let _y, _scale, deltaY = Math.abs(action.deltaY)
          if ((isExpand && deltaY < threshold) || (!isExpand && -action.deltaY > threshold)) {
            _y = expandH
            _scale = 1
            isExpand = true
          } else {
            _y = initH
            _scale = 1.5
            isExpand = false      
          }
          return {
            infoHeight: _y,
            scale: _scale,
            isExpand
          }
        }
        default:
          return state;  
      }
    }
    const gogoro$ = pan$.scan(reducer, initialState)
    
    gogoro$.subscribe({
      next: (value) => {
        this.setState({ currentHeight: `${value.infoHeight}px`, isExpand: value.isExpand })
        this.props.setScale(1.75 - (1 * value.infoHeight / expandH))
      },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    })
  }

  toggleColor = (id) => {
    this.props.onChange({ type: this.props.id, color: id, bgColor: this.state.data[id].bgColor })
  }
  render () {
    let { data, color, title, price } = this.state

    return (
      <CarInfoWrapper
        className={`infoContainer`}
        zIndex={this.props.zIndex}>
        <CarInfo
          isExpand={this.state.isExpand}
          height={this.state.currentHeight}
          className={`info-${this.props.id}`}>
          <div>
            <Header>
              <h3>{title}</h3>
            </Header>
            <Colors>
              {
                _.map(data, (t, id) => <Dot key={id} color={t.color} onClick={() => this.toggleColor(id)}></Dot>)
              }
            </Colors>
          </div>
          <Divider />
          <Content className="content">
            <InfoList title={`關於 About`} data={data[color][`feature`]}/>
          </Content>
          <BuyCarSection>
            <Price>{price}</Price>
            <BuyButton color={`linear-gradient(135deg, #33FC74, #43D8FF)`}>預定</BuyButton>
          </BuyCarSection>
        </CarInfo>
      </CarInfoWrapper>   
    )
  }
}