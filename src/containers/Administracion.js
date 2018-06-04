import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Administracion.scss";

export default class Administracion extends Component {
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
            <div className="Administracion">
                <h1>Administracion</h1>

            </div>
        );
    }
}
