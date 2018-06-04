import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Actuaciones.scss";

export default class Actuaciones extends Component {
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
            <div className="Actuaciones">
                <h1>Actuaciones</h1>

            </div>
        );
    }
}
