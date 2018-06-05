// Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom'


import '../../containers/App.scss';

const coords = {
  lat: 40.0000000,
  lng: -4.0000000
}


class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rendermap: true
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount(prevProps, prevState) {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 7;

      const center = new maps.LatLng(coords.lat, coords.lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    const style = {
      height: '100vh'
    }

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}


export default Map;