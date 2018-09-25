import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css"
import Map from 'components/nuit-blanche/Map.jsx'
import List from 'components/nuit-blanche/List.jsx'
import Toolbox from 'components/nuit-blanche/Toolbox.jsx'
import ItemsData from "layouts/nuit-blanche/data.json";
import _ from "lodash";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-74093364-19')
ReactGA.pageview(window.location.pathname + window.location.search)

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: calc(100vh);
    padding: 0 !important;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  height: var(--default-nuit-height);
  width: var(--default-nuit-width);
  border-radius: 10px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.24);
  position: relative;
  /* may cause problem */
  overflow: hidden;

  @media screen and (max-width: 768px) {
    border-radius: 0px;
    height: calc(100vh - 25px);
    width: 100%;
    padding: 0 !important;
    box-shadow: none;
  }

  > #nuit-blanche-map-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`

export default class Nuit extends React.Component {
  state = {
    steps: [],
    ItemsData: ItemsData,
    isToggleList: false
  }
  componentDidMount () {
    let { ItemsData } = this.state
    let alldata = _.map(ItemsData.alldata, (item) => { return { ...item, active: false } })
    ItemsData.alldata = alldata
    this.setState({ ItemsData })
  }
  _onToggleList = () => {
    this.setState({ isToggleList: !this.state.isToggleList })
  }
  _onToggleItem = (id) => {
    let { ItemsData } = this.state
    let _id = ItemsData.alldata.findIndex(datum => datum.id === id);
    
    if (_id !== undefined && _id !== -1) {
      let target = ItemsData.alldata[_id]
      ReactGA.event({
        category: '4',
        action: `${target[`active`] ? `select` : `cancel`} item: #${id}`
      });
      let ids = [1, 2, 3]
      let url = window.location.origin + `/4?place=[${ids.join(',')}]`

      target[`active`] = !target[`active`]
      ItemsData.alldata[_id] = target
      this.setState({ ItemsData })
    }
  }
  _onToggleStep = (steps) => {
    this.setState({ steps })
  }

  render () {
    return (
        <Section className="section">
          <Header
            color={`#50514F`}
            counter={4}
            title={`Nuit-Blanche #2018`}
          />
          <Wrapper className="wrapper">
            <Toolbox 
              isToggleList={this.state.isToggleList}
              _onToggleList={this._onToggleList} />
            <Map
              isToggleList={this.state.isToggleList}
              places={this.state.ItemsData}
              _onToggleList={this._onToggleList}
              _onToggleItem={this._onToggleItem}
            />
            <List
              isToggleList={this.state.isToggleList}
              places={this.state.ItemsData}
              _onToggleItem={this._onToggleItem}
              _onToggleList={this._onToggleList}
            />
          </Wrapper>
        </Section>    
    )
  }
}