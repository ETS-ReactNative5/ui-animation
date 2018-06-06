import React, { Component } from 'react'
// import styled from 'styled-components'
import ReactMapGL from 'react-map-gl'
// import _ from 'lodash'

// const Background = styled.div`
//   background-image: url("https://i.imgur.com/0ZxFVS9.png");
//   height: 100%;
//   width: 100%;
//   background-size: cover;
//   background-position: center;
//   opacity: calc(1 - var(--scroll));
//   transform: scale(calc(1 + var(--scroll) * 1));
//
//   // display: none;
// `

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
    visibility: {
      water: true,
      parks: true,
      buildings: true,
      roads: true,
      labels: true,
      background: true
    },
    color: {
      water: 'blue',
      parks: '#E6EAE9',
      buildings: '#c0c0c8',
      roads: '#ffffff',
      labels: '#78888a',
      background: '#EBF0F0'
    }
  }
  render () {
    return (
      // <Background />
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    )
  }
}
