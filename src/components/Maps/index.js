import React from 'react';
import { Gmaps } from 'react-gmaps';
import { Row, Col, ProgressBar } from 'react-bootstrap'
import './Maps.scss';

const coords = {
  lat: 40.0000000,
  lng: -4.0000000
}

const params = { v: '3.exp', key: 'AIzaSyCbW4EbkDkwkbO8y1j02z-YRpFDzrwJ6Nw' };

class Maps extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      rendermap: true
    }
  }

  componentDidMount() {
    this.setState({ rendermap: true })
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    // console.log('onDragEnd', e);
  }

  onCloseClick() {
    // console.log('onCloseClick');
  }

  onClick(e) {
    // console.log('onClick', e);
  }


  render() {
    return (
      <Gmaps className="gmaps"
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={6}
        params={params}
        onMapCreated={this.onMapCreated}>
      </Gmaps>
    )
  }
}


export default Maps;