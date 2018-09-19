import React from "react";
import styled from "styled-components";
import ItemsData from 'layouts/nuit-blanche/data.json'
import Navbar from 'components/nuit-blanche/Navbar'
import { ArrowLeft } from "react-feather";
import _ from 'lodash';

const place = [`全部`, `捷運圓山站周邊`, `臺北市立美術館周邊`, `花博舞蝶館周邊`, `聖多福教堂周邊`]
const Wrapper = styled.div`
  background: #f8f8f8;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
  padding: 0 0 10px 0;
  margin: 0 0 20px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  width: 100%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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
  }
`

const Media = styled.div`
  width: 30%;
  position: relative;
  margin: 0 0 0 4px;
  > img {
    width: 100%;
    height: auto;
  }
`
export default class Nuit extends React.Component {
  state = {
    data: null,
    filter: `全部`
  };
  componentDidMount() {
    let { data } = this.state
    data = _.chain(ItemsData.alldata).map((d) => {
      return {
        ...d,
        category: `${d.typeContent} / ${d.typeContentEn}`
      }
    }).groupBy(`category`).value()
    /* data = this.rename(_init, '裝置作品', '裝置藝術 / Visual Art Work')
    data = this.rename(_init, '表演活動', '表演活動 / Performance')
    data = this.rename(_init, '響應串連', '響應串連 / Off-Program') */
    this.setState({ data })
  }
  rename = (obj, key, newKey) => {
    if(_.keys(obj).find((o) => o === key)) {
      obj[newKey] = _.clone(obj[key], true);
      delete obj[key];
    }
    return obj;
  }

  onChange = (id) => {
    console.log(place[id], '' + id);
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
  render() {
    return (
      <Wrapper>
        <Header>
          <h2><StyledArrowLeft />白晝之夜街道地圖</h2>
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
                  <Item key={id}>
                    <Info>
                      <h3><img src={datum.marker} alt={datum.marker} />{datum.title}</h3>
                      <p className="time">{datum.timeContent}</p>
                      <p>{datum.locationContent}</p>
                    </Info>
                    <Media>
                      <img src={datum.infoWindowImage} alt={datum.infoWindowImage} />
                    </Media>
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
