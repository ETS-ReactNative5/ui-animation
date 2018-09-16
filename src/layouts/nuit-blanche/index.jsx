import React from 'react'
import styled from "styled-components";
import Header from "components/header";
import "bulma/css/bulma.css"

import ReactMapGL from 'react-map-gl'
import DeckGL, {PolygonLayer} from 'deck.gl';
import {TripsLayer} from '@deck.gl/experimental-layers';
const TOKEN = "pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw"

// Source data CSV
const DATA_URL = {
  BUILDINGS:
    'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line
  TRIPS:
    'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/trips.json' // eslint-disable-line
};

const LIGHT_SETTINGS = {
  lightsPosition: [-74.05, 40.7, 8000, -73.5, 41, 5000],
  ambientRatio: 0.05,
  diffuseRatio: 0.6,
  specularRatio: 0.8,
  lightsStrength: [2.0, 0.0, 0.0, 0.0],
  numberOfLights: 2
};

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
  /* may cause problem */
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 50px);
    width: 100%;
    padding: 0 !important;
    box-shadow: none;
  }

  #deckgl-wrapper {
    width: 100%;
    height: 100%;
  }
`

export default class Nuit extends React.Component {
  state = {
    viewport: {
      width: 300,
      height: 400,
      longitude: -74,
      latitude: 40.72,
      zoom: 13,
      maxZoom: 16,
      pitch: 45,
      bearing: 0
    },
    time: 0
  }
  componentDidMount () {
    let mapDiv = document.querySelector('.wrapper')
    let { viewport } = this.state
    viewport.width = mapDiv.clientWidth
    viewport.height = mapDiv.clientHeight
    
    this.setState({ viewport })
    this._animate()
  }
  componentWillUnmount() {
    if (this._animationFrame) {
      window.cancelAnimationFrame(this._animationFrame);
    }
  }

  _animate() {
    const {
      loopLength = 1800, // unit corresponds to the timestamp in source data
      animationSpeed = 30 // unit time per second
    } = this.props;
    const timestamp = Date.now() / 1000;
    const loopTime = loopLength / animationSpeed;

    this.setState({
      time: ((timestamp % loopTime) / loopTime) * loopLength
    });
    this._animationFrame = window.requestAnimationFrame(this._animate.bind(this));
  }

  _renderLayers() {
    const {buildings = DATA_URL.BUILDINGS, trips = DATA_URL.TRIPS, trailLength = 180} = this.props;

    return [
      new TripsLayer({
        id: 'trips',
        data: trips,
        getPath: d => d.segments,
        getColor: d => (d.vendor === 0 ? [253, 128, 93] : [23, 184, 190]),
        opacity: 0.3,
        strokeWidth: 2,
        trailLength,
        currentTime: this.state.time
      }),
      new PolygonLayer({
        id: 'buildings',
        data: buildings,
        extruded: true,
        wireframe: false,
        fp64: true,
        opacity: 0.5,
        getPolygon: f => f.polygon,
        getElevation: f => f.height,
        getFillColor: [74, 80, 87],
        lightSettings: LIGHT_SETTINGS
      })
    ];
  }

  render () {
    const {viewState, controller = true, baseMap = true} = this.props;
    return (
        <Section className="section">
          <Header
            color={`#50514F`}
            counter={4}
            title={`Nuit-Blanche #2018`}
          />
          <Wrapper className="wrapper">
            <DeckGL
              id="deck-wrapper"
              layers={this._renderLayers()}
              initialViewState={this.state.viewport}
              viewState={viewState}
              controller={controller}
            >
              {baseMap && (
                <ReactMapGL
                  reuseMaps
                  mapStyle="mapbox://styles/mapbox/dark-v9"
                  preventStyleDiffing={true}
                  mapboxApiAccessToken={TOKEN}
                />
              )}
            </DeckGL>
          </Wrapper>
        </Section>    
    )
  }
}

// behance source: https://www.behance.net/gallery/62585797/Festival-Papillons-de-Nuit-2017
// mapbox source: https://gist.github.com/mchew7/55a80623ec22774f0ee1bd6e2b0337e0
// https://www.mapbox.com/mapbox-gl-js/example/3d-buildings/
// https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill-extrusion
// https://gist.github.com/mchew7/55a80623ec22774f0ee1bd6e2b0337e0
