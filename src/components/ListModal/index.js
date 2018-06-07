import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Glyphicon, Modal, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

// Assets
import "../../containers/App.scss";


export default class ListModal extends Component {
    constructor(props) {
        super(props);

        this.state = {

            actModalShow: false

        };
    }


    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
                className="listmodal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="list-unstyled components">

                        {this.props.listopts.map(opt => (
                            <li >
                                <Glyphicon glyph="chevron-right" /> <Link to={opt.link} onClick={this.props.onHide}>{opt.title}</Link>
                            </li>
                        ))}

                    </ul>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}