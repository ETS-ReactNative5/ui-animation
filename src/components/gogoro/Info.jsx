import React from 'react'
import styled from "styled-components";
import Hammer from "hammerjs";
import Rx from 'rxjs/Rx';
import RxCSS from 'rxcss'
import Tag from 'components/gogoro/Tag'
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
`
const CarInfo = styled.div`
  width: 100%;
  min-height: 150px;
  height: calc(var(--gogoro-infoHeight));
  padding: 10px 15px;
  border-radius: 12.5px;
  background: white;
  position: relative;

  cursor: -webkit-grab;
  transition: height 0.15s ease;
  overflow: hidden;

  &.expand {
    overflow: scroll;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-size: 18px;
    color: #222;
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
const Content = styled.div`
`
const BuyCarSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  border-top: 1px solid rgb(235, 235, 235);
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
    init: 100,
    expand: 550,
    type: this.props.data,
    color: this.props.color
  }

  componentDidMount () {
    this.setInfoDragger()
  }
  setInfoDragger = () => {
    const initialState = {
      infoHeight: 0,
      scale: 1.25
    };
    let { init, expand, threshold } = this.state
    let info = document.querySelector('.info');
    let hammer = new Hammer(info, {
      direction: Hammer.DIRECTION_ALL,
      threshold: 0,
    });
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    const pan$ = Rx.Observable
    .fromEventPattern((cb) => hammer.on('panstart panend panup pandown', cb))
    // .map(e => {
    //   let wrapper = document.querySelector('.wrapper');
    //   let container = document.querySelector('.infoContainer');
    //   console.log(e.center.y - wrapper.offsetTop, container.offsetTop + 110)
    
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'panup':
        case 'pandown':
          let _y = info.classList.contains(`expand`) ? -action.deltaY + expand : -action.deltaY
          return {
            ...state,
            infoHeight: `${_y}px`,
            scale: 1.5 + action.deltaY/1000 > 1.5 ? 1.5 : 1.5 + action.deltaY/1000
          };
          
        case 'panend': {
          let _y, _scale
          if (info.classList.contains(`expand`) && action.deltaY > threshold) {
            info.classList.remove(`expand`)
            _y = `${init}px`
            _scale = 1.5
          } else if (info.classList.contains(`expand`) && Math.abs(action.deltaY) < threshold) {
            _y = `${expand}px`
            _scale = 1
          } else if (action.deltaY < -threshold) {
            info.classList.add(`expand`)
            _y = `${expand}px`
            _scale = 1
          } else if (!info.classList.contains(`expand`) && Math.abs(action.deltaY) < threshold) {
            _y = `${init}px`
            _scale = 1.5
          }
          return {
            infoHeight: _y,
            scale: _scale
          };
        }

        default:
          return state;  
      }
    }
    const gogoro$ = pan$.scan(reducer, initialState);
    RxCSS({
      gogoro: gogoro$
    })
  }

  toggleColor = (id) => {
    this.props.onChange({ type: `gp1`, color: id, bgColor: this.state.type[id].bgColor })
  }
  render () {
    let {type, color } = this.state
    return (
      <CarInfoWrapper className="infoContainer" zIndex={this.props.zIndex}>
        <CarInfo className="info">
          <div>
            <Header>
              <h3>Gogoro 1 Plus</h3>
              <Tag bgColor={``} text={`熱賣中`}/>
            </Header>
            <Colors>
              {
                _.map(type, (t, id) => <Dot key={id} color={t.color} onClick={() => this.toggleColor(id)}></Dot>)
              }
            </Colors>
          </div>
          <Divider />
          <Content>
            <InfoList title={`關於 About`} data={type[color][`feature`]}/>
          </Content>
          <BuyCarSection>
            <Price>$108,000</Price>
            <BuyButton color={`linear-gradient(135deg, #33FC74, #43D8FF)`}>預定</BuyButton>
          </BuyCarSection>
        </CarInfo>
      </CarInfoWrapper>   
    )
  }
}