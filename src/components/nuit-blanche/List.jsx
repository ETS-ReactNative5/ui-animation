import React from "react";
import styled, { keyframes } from "styled-components";
import ItemsData from 'layouts/nuit-blanche/data.json'
import Navbar from 'components/nuit-blanche/Navbar'
import { ArrowLeft } from "react-feather";
import _ from 'lodash';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const place = [`全部`, `捷運圓山站周邊`, `臺北市立美術館周邊`, `花博舞蝶館周邊`, `聖多福教堂周邊`, `捷運雙連站周邊`, `捷運中山站周邊`, `南京林森路口周邊`, `台北當代藝術館周邊`, `台北國際藝術村周邊`]
const Wrapper = styled.div`
  background: #f8f8f8;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: ${props => props.active ? `block` : `none`};
`;

const Header = styled.div`
  background: white;
  width: 100%;
  min-height: 80px;
  padding: 15px;
  box-sizing: border-box;
  > h2 {
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 20px;
  }
`

const StyledArrowLeft = styled(ArrowLeft)`
  margin-top: 2px;
`

const Body = styled.div`
  // display: flex;
  // flex-direction: column;
  height: calc(100% - 100px);
  padding: 0 15px 15px 15px;
  overflow: scroll;
`

const Title = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  font-size: 20px;
  font-weight: bold;
  margin: 12px 0;
  padding: 8px 0;
  background: #f8f8f8;
  z-index: 9;

  &.Visual {
    color: #5f0f86;
  }

  &.Performance {
    color: #eb5400;
  }

  &.Off-Program {
    color: #e60072;
  }
`

const Item = styled.div`
  padding: 5px 7.5px;
  margin: 0 0 20px 0;
  border-radius: 5px;
  display: flex;
  width: 100%;
  background: white;
  // animation: ${fadeIn} 1s cubic-bezier(0, 0.5, 0.2, 1) both;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px);

  > h3 {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: auto;
      margin-right: 4px;
    }
  }

  > p {
    color: #50514F;
    font-size: 13px;
    margin-bottom: 5px;

    &.time {
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Media = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  position: relative;
  margin: 0 8px 0 0;
  overflow: hidden;
  > img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`
export default class Nuit extends React.Component {
  state = {
    data: null,
    filter: `全部`,
    step: [],
    active: true
  };
  componentDidMount() {
    let { data } = this.state
    data = _.chain(ItemsData.alldata).map((d) => {
      return {
        ...d,
        category: `${d.typeContent} / ${d.typeContentEn}`
      }
    }).groupBy(`category`).value()
    this.setState({ data })
  }

  onChange = (id) => {
    let { data } = this.state
    if (id !== 0) {
      data = _.chain(ItemsData.alldata)
              .filter((d) => d.areaTag === ('' + id))
              .map((d) => {
                return {
                  ...d,
                  category: `${d.typeContent} / ${d.typeContentEn}`
                }
              }).groupBy(`category`).value()
    } else {
      data = _.chain(ItemsData.alldata)
              .map((d) => {
                return {
                  ...d,
                  category: `${d.typeContent} / ${d.typeContentEn}`
                }
              }).groupBy(`category`).value()
    }
    this.setState({ data })
  }

  _onToggle = (id) => {
    let { step } = this.state
    if (!step.find((s) => s === id)) {
      step.push(id)
    } else {
      let id = step.findIndex((s) => s === id)
      step.splice(id, 1)
    }
    this.setState({ step })
    // pass to map
    let stepsLatLan = _.map(step, (s) => {
      let item = _.find(ItemsData.alldata, (i) => i.id === s)
      return {
        longitude: item.longitude,
        latitude: item.latitude
      }
    })
    this.props._onToggleStep(stepsLatLan)
  }
  render() {
    return (
      <Wrapper active={this.state.active}>
        <Header>
          <h2><StyledArrowLeft onClick={() => this.setState({ active: !this.state.active })}/>白晝之夜街道地圖</h2>
          <Navbar
            place={place}
            onChange={this.onChange}/>
        </Header>
        <Body>
          {
            _.map(this.state.data, (list, id) =>
              <React.Fragment key={id}>
                <Title className={list[0][`typeContentEn`]}>{id}</Title>
                {
                  _.map(list, (datum, id) => 
                  <Item key={id} onClick={() => this._onToggle(datum.id)}>
                    <Media>
                      <img src={datum.infoWindowImage} alt={datum.infoWindowImage} />
                    </Media>
                    <Info>
                      <h3><img src={datum.marker} alt={datum.marker} />{datum.title}</h3>
                      <p className="time">{datum.timeContent}</p>
                      <p>{datum.locationContent}</p>
                    </Info>
                  </Item>
                  )
                }
              </React.Fragment>
            )
          }
        </Body>
      </Wrapper>
    )
  }
}
