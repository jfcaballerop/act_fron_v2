import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Glyphicon, Modal, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";


import axios from 'axios';
import ROUTESNAME from '../../services/routesName'

// Assets
import "../../containers/App.scss";

export default class ListDataModalReq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount = () => {

        this.props.url ? axios.get(this.props.url, ROUTESNAME.getSessionToken('sessionUserSga'))
            .then((response) => {
                if (response.status === 200) {
                    this.setState((prevState, props) => ({
                        isLoaded: true,
                        items: response.data
                    }))
                } else {
                    this.setState({
                        isLoaded: true,
                        error: response.status
                    });
                }

                // console.log('State ListaActuacion2', this.state)

            })
            : null
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div {...this.props}>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div {...this.props} >Loading...</div>;
        } else {
            return (
                <div {...this.props}>
                    <ul>
                        {items.map(item => (
                            <li key={item._id.$oid}>
                                {item.code} {item.desc}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

