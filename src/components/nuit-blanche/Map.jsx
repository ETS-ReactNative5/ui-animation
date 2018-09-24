import React from 'react'
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf'
import $ from 'jquery';
import _ from 'lodash'

import Swiper from "react-id-swiper";
import styled, { keyframes } from "styled-components";
import ExtendItem from "components/nuit-blanche/ExtendItem";
import { ArrowRight } from "react-feather";

const TOKEN = "pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw"
mapboxgl.accessToken = TOKEN

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

const StepsWrapper = styled.div`
  width: 100%;
  height: 130px;
  position: absolute;
  bottom: 0;
  z-index: 0;
  animation: ${fadeIn} 0.5s cubic-bezier(0, 0.5, 0.2, 1) both;

  .swiper-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 15px;
  }
`

const ItemWrapper = styled.div`
  width: ${props => props.width};
  box-sizing: border-box;
`

const Instruction = styled.div`
  padding: 7.5px 7.5px;
  margin: 15px 0 15px 15px;
  width: calc(100% - 15px);
  height: calc(100% - 30px);

  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 18px;
  }

  > div {
    margin-left: 4px;
    width: 24px;
    height: 24px;
    background: #50514F;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export default class Map extends React.Component {
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
      style: 'mapbox://styles/lichin/cjmf2b5m6l3rz2spazn55o1nn'
    },
    pointHopper: {},
    swiper: null,
    steps: []
  }
  swiperRef = ref => {
    this.setState({ swiper: ref.swiper });
  }
  componentDidMount () {
    const map = new mapboxgl.Map({
      ...this.state.viewport
    });
    this.setState({ map }, () => {
      this._renderBuilding(map)
    })
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
          'fill-extrusion-color': '#222',
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
          'fill-extrusion-opacity': .75
        }
      }, labelLayerId);

      map.addLayer({
        id: 'dropoffs-symbol',
        type: 'symbol',
        source: {
          data: turf.featureCollection([]),
          type: 'geojson'
        },
        layout: {
          'icon-allow-overlap': true,
          'icon-ignore-placement': true,
          'icon-image': 'marker-15',
        }
      });

      let routing = turf.featureCollection([])
      map.addSource('route', {
        type: 'geojson',
        lineMetrics: true,
        data: routing
      })
      map.addLayer({
        id: 'routeline-active',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          //'line-color': '#FFD45E',
          'line-gradient': [
            'interpolate',
            ['linear'],
            ['line-progress'],
            0, "#FFD77E",
            0.25, "#FFD169",
            0.5, "#FFCA54",
            0.75, "#FFC43E",
            1, "#FFBD29"
          ],
          'line-width': {
            base: 0.25,
            stops: [[17, 3], [22, 17]]
          }
        }
      });

      map.addLayer({
        id: 'routearrows',
        type: 'symbol',
        source: 'route',
        layout: {
          'symbol-placement': 'line',
          'text-field': '▶',
          'text-size': {
            base: 1,
            stops: [[12, 24], [22, 60]]
          },
          'symbol-spacing': {
            base: 1,
            stops: [[12, 30], [22, 160]]
          },
          'text-keep-upright': false
        },
        paint: {
          'text-color': '#F4AC45',
          'text-halo-color': 'hsl(55, 11%, 96%)',
          'text-halo-width': 2
        }
      });
    })
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.places) {
      let steps = _.chain(nextProps.places.alldata)
        .filter((datum) => datum.active)
        .map((datum) => {
        return {
          longitude: datum.longitude,
          latitude: datum.latitude,
          data: datum
        };
      }).value();
      this.setState({ steps }, () => {
        // this._renderRoute(steps)
      })
    }
  }

  _renderRoute = (steps) => {
    if (!_.isEmpty(steps)) {
      let _steps = turf.featureCollection([]);
      let pointHopper = {}
      _.map(steps, (s) => {
        let pt = turf.point([s.longitude, s.latitude], { orderTime: Date.now(), key: Math.random() } );
        _steps.features.push(pt);
        pointHopper[pt.properties.key] = pt;
      })
      this.setState({ pointHopper })
      // render route
      this.drawRoute(pointHopper)
      // render dot.
      this.state.map.getSource('dropoffs-symbol').setData(_steps);
    }
  }

  drawRoute = (pointHopper) => {
    $.get(this.generateRouteAPI(pointHopper)).done((data) => {
      let routeGeoJSON = turf.featureCollection([turf.feature(data.trips[0].geometry)]);
      if (!data.trips[0]) {
        let routing = turf.featureCollection([])
        routeGeoJSON = routing;
      } else {
        this.state.map.getSource('route')
          .setData(routeGeoJSON);
        // this.state.map.getSource('line')
          // .setData(routeGeoJSON);
        this._onfly(0)
      }
      if (data.waypoints.length === 12) {
        window.alert('Maximum number of points reached. Read more at mapbox.com/api-documentation/#optimization.');
      }
    })
  }
  generateRouteAPI = (pointHopper = {}) => {
    let coordinates = [];
    let distributions = [];
    let restJobs = this.objectToArray(pointHopper);

    if (restJobs.length > 1) {
      restJobs.forEach((d, i) => {
        coordinates.push(d.geometry.coordinates);
        // make sure dis = corr - 1
        if (distributions.length < restJobs.length - 1) {
          distributions.push(0 + ',' + coordinates.length);
        }
      }); 
    }
    // Coordinates will include the current location of the truck,
    return 'https://api.mapbox.com/optimized-trips/v1/mapbox/walking/' + coordinates.join(';') + '?distributions=' + distributions.join(';') + '&overview=full&steps=true&geometries=geojson&source=first&access_token=' + mapboxgl.accessToken;
  }

  objectToArray = (obj) =>{
    var keys = Object.keys(obj);
    var routeGeoJSON = keys.map((key) => {
      return obj[key];
    });
    return routeGeoJSON;
  }

  _onfly = (id) => {
    if (this.state.steps && this.state.steps[id]) {
      let source = this.state.steps[id].data
      this.state.map.flyTo({
        bearing: 10 + id / 100,
        center: [source.longitude, source.latitude],
        zoom: 18,
        pitch: 40 + id / 100,
      });  
    }
  }
  _onToggle = id => {
    console.log(id);
    this.props._onToggleItem(id)
  };
  render () {
    const params = {
      onInit: swiper => {
        this.swiper = swiper;
      },
      on: {
        transitionEnd: () => {
          let activeIndex = this.state.swiper.isEnd ? (this.state.swiper.slides.length - 1) : this.state.swiper.activeIndex
          this._onfly(activeIndex)
        }
      },
      shouldSwiperUpdate: true,
      slidesPerView: 'auto'
    };
    return (
      <React.Fragment>
        <div id="nuit-blanche-map-wrapper" />
        <StepsWrapper>
          <Swiper {...params} ref={this.swiperRef}>
            {
              _.isEmpty(this.state.steps) ? (
                <ItemWrapper width={`100%`} onClick={this.props._onToggleList}>
                  <Instruction>
                    <h3>還沒決定好去哪嗎, 開始探索吧!</h3>
                    <div><ArrowRight onClick={this.props._onToggleList} color={`white`} size={16}/></div>
                  </Instruction>
                </ItemWrapper>
              ) : (
                _.map(this.state.steps, (s, id) => 
                  <ItemWrapper key={id} width={`90%`}>
                    <ExtendItem
                      inMap={true}
                      id={id}
                      key={id}
                      group={s.data.typeContentEn}
                      datum={s.data}
                      isToggle={true}
                      onToggle={() => this._onToggle(s.data.id)}
                    />
                  </ItemWrapper>
                )
              )
            }
          </Swiper>
        </StepsWrapper>
      </React.Fragment>
    ) 
  }
}

// behance source: https://www.behance.net/gallery/62585797/Festival-Papillons-de-Nuit-2017
// https://gist.github.com/mchew7/55a80623ec22774f0ee1bd6e2b0337e0
// with stop: https://www.mapbox.com/help/optimization-api/