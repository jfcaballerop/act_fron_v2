//import the GoogleApiWrapper
import React, { Component } from 'react'
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import SgaMap from '../components/Map';

export class MapsContainer extends Component {

    state = {
        actuaciones: []
    }

    componentDidMount = () => {

    }
    onFilter = (event) => {

    }
    render() {
        const style = {

        }
        // if (!this.props.loaded) return <div>Loading...</div>;

        return (
            <div style={style} className="SgaMap">
                <SgaMap google={this.props.google} />

            </div>
        );
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyCbW4EbkDkwkbO8y1j02z-YRpFDzrwJ6Nw',
        language: 'es',
        libraries: ['visualization']
    }
    ))(MapsContainer)

