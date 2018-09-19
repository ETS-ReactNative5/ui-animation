import React from 'react'
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.js'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import * as turf from '@turf/turf'
import $ from 'jquery';
import _ from 'lodash'

const TOKEN = "pk.eyJ1IjoibGljaGluIiwiYSI6ImNqOHF6NHVoMzB6aTkyeG50am1xcjh3aW4ifQ.CgaIVuDlJLRDbti7yiL4yw"
mapboxgl.accessToken = TOKEN

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
      style: 'mapbox://styles/mapbox/dark-v9'
    },
    defaultPoint: [121.517315, 25.047908],
    endPoint: [121.512, 25.05],
    lastAtRestaurant: 0,
    pointHopper: {}
  }
  componentDidMount () {
    const map = new mapboxgl.Map({
      ...this.state.viewport
    });
    this.setState({ map }, () => {
      this._renderBuilding(map)
      // this._renderDirection(map)
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
          'line-color': '#3887be',
          'line-width': {
            base: 1,
            stops: [[12, 3], [22, 12]]
          }
        }
      }, 'waterway-label');

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
          'text-color': '#3887be',
          'text-halo-color': 'hsl(55, 11%, 96%)',
          'text-halo-width': 3
        }
      }, 'waterway-label');
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
    this.setState({ directions })
    document.querySelector('.directions-control-instructions').style.visibility = 'hidden'
  }

  componentWillReceiveProps = nextProps => {
    this._renderPoint(nextProps.steps)
  }

  _renderPoint = (steps) => {
    this.setState({ pointHopper: {} })

    // update points
    let _steps = turf.featureCollection([]);
    _.map(steps, (s) => {
      let pt = turf.point([s.longitude, s.latitude], { orderTime: Date.now(), key: Math.random() } );
      _steps.features.push(pt);
      this.state.pointHopper[pt.properties.key] = pt;
    })
    // render route
    this.drawRoute()
    // render dot.
    this.state.map.getSource('dropoffs-symbol').setData(_steps);

  }
  drawRoute = () => {
    $.get(this.generateRouteAPI()).done((data) => {
      let routeGeoJSON = turf.featureCollection([turf.feature(data.trips[0].geometry)]);
      if (!data.trips[0]) {
        let routing = turf.featureCollection([])
        routeGeoJSON = routing;
      } else {
        this.state.map.getSource('route')
          .setData(routeGeoJSON);
      }
      if (data.waypoints.length === 12) {
        window.alert('Maximum number of points reached. Read more at mapbox.com/api-documentation/#optimization.');
      }
    })
  }
  generateRouteAPI = () => {
    let { defaultPoint, endPoint, lastAtRestaurant, pointHopper } = this.state
    let coordinates = [defaultPoint];
    let distributions = [];
    let keepTrack = [defaultPoint];
    let restJobs = this.objectToArray(pointHopper);
    let restaurantIndex

    if (restJobs.length > 0) {
      // Check to see if the request was made after visiting the restaurant
      let needToPickUp = restJobs.filter((d, i) => {
        return d.properties.orderTime > lastAtRestaurant;
      }).length > 0;

      if (needToPickUp) {
        restaurantIndex = coordinates.length;
        // Add the restaurant as a coordinate
        coordinates.push(endPoint);
        // push the restaurant itself into the array
        keepTrack.push(pointHopper.warehouse);
      }

      restJobs.forEach((d, i) => {
        // Add dropoff to list
        keepTrack.push(d);
        coordinates.push(d.geometry.coordinates);
        // if order not yet picked up, add a reroute
        if (needToPickUp && d.properties.orderTime > lastAtRestaurant) {
          distributions.push(restaurantIndex + ',' + (coordinates.length - 1));
        }
      });
    }
    // Set the profile to `driving`
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

  render () {
    return <div id="nuit-blanche-map-wrapper" />
  }
}

// behance source: https://www.behance.net/gallery/62585797/Festival-Papillons-de-Nuit-2017
// https://gist.github.com/mchew7/55a80623ec22774f0ee1bd6e2b0337e0
// with stop: https://www.mapbox.com/help/optimization-api/