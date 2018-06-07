import React, { Component } from 'react'
import styled from 'styled-components'
import ReactMapGL, { Marker } from 'react-map-gl'
import CityPin from './CityPin'

const Background = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.65;
  transform: scale(calc(1 + var(--scroll) * 1));

`

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw' // Set your mapbox token here
export default class Map extends Component {
  state = {
    CITIES: [
      {"city":"America Town", "latitude":26.306950639751037, "longitude":127.76400209636802},
      {"city":"Island", "latitude":26.18, "longitude":127.645},
      {"city":"Museum", "latitude":26.2273138, "longitude":127.6916602},
    ],
    viewport: {
      latitude: 26.225,
      longitude: 127.71,
      zoom: 10.75,
      bearing: 0,
      pitch: 0,
      width: document.body.clientWidth,
      height: document.body.clientHeight
    },
    color: {
      water: '#DBE2E6',
      parks: '#E6EAE9',
      buildings: '#c0c0c8',
      roads: '#ffffff',
      labels: '#78888a',
      background: '#EBF0F0'
    }
  }
  _renderCityMarker = (city, index) => {
    return (
      <Marker key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude} >
        <CityPin size={20} active={this.props.activeSlideIndex === index}/>
      </Marker>
    );
  }
  render () {
    return (
      <Background>
        <ReactMapGL
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...this.state.viewport}
          mapStyle={'mapbox://styles/mapbox/streets-v10'}
          onViewportChange={(viewport) => this.setState({viewport})}>
          { this.state.CITIES.map(this._renderCityMarker) }
        </ReactMapGL>
      </Background>
    )
  }
}
