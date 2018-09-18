import React from "react";
import styled from "styled-components";
import ItemsData from 'layouts/nuit-blanche/data.json'
import { ArrowLeft } from "react-feather";
import _ from 'lodash';

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
    font-weight: bold;

    line-height: 20px;
  }
`

const StyledArrowLeft = styled(ArrowLeft)`
  margin-top: 2px;
`

const Navbar = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 0;
  height: 36px;
  box-sizing: border-box;
  &.navbar::-webkit-scrollbar { 
    display: none; 
  }
`

const Cell = styled.div`
  margin: 0 2.5px;
  padding: 5px 15px;
  color: #50514F;
  flex-shrink: 0;
  font-size: 16px;
  cursor: pointer;

  &.active {
    background: #3d3d3d;
    border-radius: 20px;
    color: #fff;

    transition: color 0.25s ease;
  }
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
  font-size: 24px;
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
    data: null
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
  render() {
    return (
      <Wrapper>
        <Header>
          <h2><StyledArrowLeft />白晝之夜景點一欄</h2>
          <Navbar className="navbar">
            {
              [`捷運圓山站周邊`, `臺北市立美術館周邊`, `花博舞蝶館周邊`, `聖多福教堂周邊`].map((d) =>
                <Cell key={d}>{d}</Cell>
              )
            }
          </Navbar>
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
