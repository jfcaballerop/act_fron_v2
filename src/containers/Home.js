import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.scss";

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
      <div className="Home">
        <h1>Home</h1>

      </div>
    );
  }
}
