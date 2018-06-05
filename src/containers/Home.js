import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.scss";

//Components
import ContainerMain from '../components/ContainerMain'
import MapsContainer from '../containers/MapsContainer'
import Maps from '../components/Map'



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidenav: false
    };
  }
  toggleSidenav = () => {
    this.setState({ showSidenav: !this.state.showSidenav });

  }

  render() {
    return (

      // <ContainerMain mapa={<Maps />} />
      <MapsContainer />

    );
  }
}
