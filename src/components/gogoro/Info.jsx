import React from 'react'
import styled from "styled-components";
import Hammer from "hammerjs";
import Rx from 'rxjs/Rx';
import RxCSS from 'rxcss'
import Tag from 'components/gogoro/Tag'
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

`
const CarInfo = styled.div`
  width: 100%;
  min-height: 100px;
  height: calc(var(--gogoro-infoHeight));
  padding: 10px 15px;
  border-radius: 12.5px;
  background: white;
  cursor: -webkit-grab;
  transition: height 0.15s ease;

  display: flex;
  flex-direction: column;
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
const Price = styled.span`
  margin: 4px 0;
  font-size: 14px;
  color: #444;
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
export default class Info extends React.Component {
  state = {
    threshold: 150,
    init: 100,
    expand: 550,
    type: this.props.data
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
    console.log(id)
    this.props.onChange({ type: `gp1`, color: id, bgColor: this.state.type[id].bgColor })
  }
  render () {
    return (
      <CarInfoWrapper className="infoContainer">
        <CarInfo className="info">
          <Header>
            <h3>Gogoro 1 Plus</h3>
            <Tag bgColor={``} text={`熱賣中`}/>
          </Header>
          <Price>$108,000</Price>
          <Colors>
            {
              _.map(this.state.type, (t, id) => <Dot key={id} color={t.color} onClick={() => this.toggleColor(id)}></Dot>)
            }
          </Colors>
        </CarInfo>
      </CarInfoWrapper>   
    )
  }
}