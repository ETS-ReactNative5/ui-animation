import React from 'react'
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf'
import $ from 'jquery';
import _ from 'lodash'
import MapSteps from 'components/nuit-blanche/MapSteps.jsx'

const TOKEN = "pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw"
mapboxgl.accessToken = TOKEN

const rainbow = [
  '#F7F1A5',
  '#F7F1A5',
  '#CD1A2C',
  '#A70052',
  '#CD1A2C',
  '#F7F1A5',
  '#F7F1A5',
];

function makeGradient(i) {
  const len = rainbow.length;
  const sides = rainbow.reduce((a, b, j) => {
    const pos = (j / len + i) % 1 || 1;
    a[a.length - 1].push(pos);
    a[a.length - 1].push(b);
    if (pos + 1 / len > 1) {
      a.push([]);
      a[a.length - 1].push(pos - 1);
      a[a.length - 1].push(b);      
    }
    return a;
  }, [[]]);
  
  return ['interpolate', ['linear'], ['line-progress']].concat(
    sides.reduce((a, b) => { return b.concat(a); }, []));
}
export default class Map extends React.Component {
  state = {
    viewport: {
      width: 300,
      height: 400,
      center: [121.517315, 25.047908],
      zoom: 14,
      maxZoom: 18.5,
      pitch: 150,
      bearing: 20,
      container: 'nuit-blanche-map-wrapper',
      style: 'mapbox://styles/lichin/cjmf2b5m6l3rz2spazn55o1nn'
    },
    pointHopper: {},
    steps: []
  }
  componentDidMount () {
    const map = new mapboxgl.Map({
      ...this.state.viewport
    });
    this.setState({ map }, () => {
      this._renderBuilding(map)
    })
  }
  initialFlyon = () => {
    setTimeout(() => {
      this.state.map.flyTo({
        bearing: 20,
        center: [121.517315, 25.047908],
        zoom: 16,
        pitch: 150,
        speed: 0.5
      }); 
    }, 2000); 
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
          // 'line-gradient': [
          //   'interpolate',
          //   ['linear'],
          //   ['line-progress'],
          //   0, "#FFD77E",
          //   0.25, "#FFD169",
          //   0.5, "#FFCA54",
          //   0.75, "#FFC43E",
          //   1, "#FFBD29"
          // ],
          'line-gradient': makeGradient(0),
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

      setTimeout(() => {
        let i = 0;
        setInterval(() => {
          i += 0.001;
          map.setPaintProperty('routeline-active', 'line-gradient', makeGradient(i));
        }, 1);
      }, 1000);

      this.initialFlyon()
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
        this._renderRoute(steps)
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
        bearing: 20 + id / 100,
        center: [source.longitude, source.latitude],
        zoom: 18,
        pitch: 160 + id / 100,
      });  
    }
  }
  building = () => {
    let query = this.state.map.queryRenderedFeatures({ layers: [`3d-buildings`] });
    console.log(query);
  }
  render () {
    return (
      <React.Fragment>
        <div id="nuit-blanche-map-wrapper" />
        <MapSteps
          // onClick={this.building}
          _onfly={this._onfly}
          _onToggleItem={this.props._onToggleItem}
          _onToggleList={this.props._onToggleList}
          steps={this.state.steps}
        />
      </React.Fragment>
    ) 
  }
}

// behance source: https://www.behance.net/gallery/62585797/Festival-Papillons-de-Nuit-2017
// https://gist.github.com/mchew7/55a80623ec22774f0ee1bd6e2b0337e0
// with stop: https://www.mapbox.com/help/optimization-api/

// route animation: https://blog.mapbox.com/map-pride-2018-with-our-new-design-tools-32b886f7db1b