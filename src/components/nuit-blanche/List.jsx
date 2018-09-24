import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "components/nuit-blanche/Navbar";
import ExtendItem from "components/nuit-blanche/ExtendItem";
import { ArrowLeft } from "react-feather";
import _ from "lodash";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-74093364-19')
ReactGA.pageview(window.location.pathname + window.location.search)


const place = [
  `全部`,
  `捷運圓山站周邊`,
  `臺北市立美術館周邊`,
  `花博舞蝶館周邊`,
  `聖多福教堂周邊`,
  `捷運雙連站周邊`,
  `捷運中山站周邊`,
  `南京林森路口周邊`,
  `台北當代藝術館周邊`,
  `台北國際藝術村周邊`
];

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  30% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  background: #f8f8f8;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: ${props => (props.active ? `block` : `none`)};
  animation: ${fadeIn} 0.5s cubic-bezier(0, 0.5, 0.2, 1) both;
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
`;

const StyledArrowLeft = styled(ArrowLeft)`
  margin-top: 2px;
`;

const Body = styled.div`
  height: calc(100% - 100px);
  padding: 0 0px 15px 0px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: initial;
`;

const Title = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 12px 0;
  padding: 8px 15px 8px;
  background: #f8f8f8;
  z-index: 1;

  &.Visual {
    color: #5f0f86;
  }

  &.Performance {
    color: #eb5400;
  }

  &.Off-Program {
    color: #e60072;
  }
`;

export default class Nuit extends React.Component {
  state = {
    places: null,
    id: 0,
    step: [],
  };

  componentWillReceiveProps = nextProps => {
    let { places } = nextProps;
    this.arrangeData(places)
  }

  onChange = id => {
    this.setState({ id }, () => 
      this.arrangeData(this.props.places)
    )
    ReactGA.event({
      category: '4',
      action: `toggle navbar cell: #${place[id]}`
    });
  };

  arrangeData = (places) => {
    let { id } = this.state;
    if (places) {
      places = _.chain(places.alldata)
      .filter(d => (id !== 0 ? d.areaTag === "" + id : true))
      .map(d => {
        return {
          ...d,
          category: `${d.typeContentEn}`
        };
      })
      .groupBy(`category`)
      .value();
      this.setState({ places });
    }
  }

  _onToggle = id => {
    this.props._onToggleItem(id)
  };

  render() {
    return (
      <Wrapper active={this.props.isToggleList}>
        <Header>
          <h2>
            <StyledArrowLeft
              onClick={this.props._onToggleList}
            />
            白晝之夜街道地圖
          </h2>
          <Navbar place={place} onChange={this.onChange} />
        </Header>
        <Body>
          {_.map(this.state.places, (list, lid) => (
            <React.Fragment key={lid}>
              <Title className={list[0][`typeContentEn`]}>{lid}</Title>
              {_.map(list, (datum, id) => (
                <ExtendItem
                  key={id}
                  group={lid}
                  datum={datum}
                  id={`${lid}-${id}`}
                  isToggle={datum.active}
                  onToggle={() => this._onToggle(datum.id)}
                />
              ))}
            </React.Fragment>
          ))}
        </Body>
      </Wrapper>
    );
  }
}
