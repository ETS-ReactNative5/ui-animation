import React, { Component } from 'react'
import styled from 'styled-components'
import ReactMapGL from 'react-map-gl'

const Background = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.65;
  transform: scale(calc(1 + var(--scroll) * 1));

`

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA' // Set your mapbox token here
export default class Map extends Component {
  state = {
    hoveredFeature: null,
    viewport: {
      latitude: 26.25,
      longitude: 127.725,
      zoom: 11,
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
  render () {
    return (
      <Background>
        <ReactMapGL
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...this.state.viewport}
          mapStyle={'mapbox://styles/mapbox/streets-v9'}
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      </Background>
    )
  }
}
