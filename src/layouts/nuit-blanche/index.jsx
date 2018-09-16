import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css"

import CircularMenu from 'components/nuit-blanche/CircularMenu.jsx'

import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.js'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

const TOKEN = "pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw"
mapboxgl.accessToken = TOKEN

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: calc(100vh);
    padding: 0 !important;
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
    height: calc(100vh - 50px);
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
    viewport: {
      width: 300,
      height: 400,
      center: [121.517315, 25.047908],
      zoom: 16,
      maxZoom: 18,
      pitch: 45,
      bearing: 0,
      container: 'nuit-blanche-map-wrapper',
      style: 'mapbox://styles/mapbox/dark-v9'
    }
  }
  componentDidMount () {
    const map = new mapboxgl.Map({
      ...this.state.viewport
    });
    this.setState({ map })
    this._renderBuilding(map)
    this._renderDirection(map)
  }

  _renderBuilding = (map) => {
    map.on('load', () => {
      // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;
      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }
  
      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 14,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "height"]
          ],
          'fill-extrusion-base': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "min_height"]
          ],
          'fill-extrusion-opacity': .6
        }
      }, labelLayerId);
    })
  }

  _renderDirection = (map) => {
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'walking',
      interactive: true,
      controls: {
        inputs: false,
        instructions: true
      }
    });
    map.addControl(directions, 'top-left');
    document.querySelector('.directions-control-instructions').style.visibility = 'hidden'
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
            <CircularMenu />
            <div id="nuit-blanche-map-wrapper" />
          </Wrapper>
        </Section>    
    )
  }
}

// behance source: https://www.behance.net/gallery/62585797/Festival-Papillons-de-Nuit-2017
// https://gist.github.com/mchew7/55a80623ec22774f0ee1bd6e2b0337e0
// with stop: https://www.mapbox.com/help/optimization-api/