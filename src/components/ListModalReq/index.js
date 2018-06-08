import React, { Component } from "react";
import { Button, Glyphicon, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListDataModalReq from '../ListDataModalReq'

// Assets
import "../../containers/App.scss";


export default class ListModalReq extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actModalShow: false,
            showlist: false,
            in: []

        };
    }

    componentDidMount = () => {
        var coll = [];
        this.props.listopts.map((opt, index) => (
            coll.push('collapse')
        ));
        this.state = {
            showlist: false,
            in: coll

        };
    }

    handleButtonClick = (index) => {

        if (this.state.showlist) return;
        var coll = [];
        this.props.listopts.map((opt, j) => {
            if (j !== index)
                coll.push('collapse')
            else
                coll.push('collapse in')
        }
        );

        this.setState({ showlist: true, in: coll });

    }

    render() {

        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
                className="listmodal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="list-unstyled components">

                        {this.props.listopts.map((opt, index) => (
                            <li key={index}>
                                <Glyphicon glyph="chevron-right" data-toggle="collapse" data-target={'#list' + index} />
                                <Link onClick={() => this.handleButtonClick(index)} to={'#'} data-toggle="collapse" data-target={'#list' + index}>{opt.title}</Link>
                                {this.state.showlist ? <ListDataModalReq id={'list' + index} className={this.state.in[index]} url={opt.api} /> : null}
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