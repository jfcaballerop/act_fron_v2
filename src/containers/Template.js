import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Glyphicon, Modal, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

// Assets
import "./App.scss";
import logoMenu from "../assets/images/logo_header.png"


export default class Template extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSidenav: false,
            admin_collapse: true,
            actuacion_collapse: true,
            actModalShow: false

        };
    }
    toggleSidenav = () => {
        this.setState({ showSidenav: !this.state.showSidenav });

    }

    render() {
        const { children } = this.props;
        let modalClose = () => this.setState({ actModalShow: false });
        let actModal = [
            { title: 'Conservacion Ordinaria', link: '/actuacionesconsord' },
            { title: 'Obras', link: '#' },
            { title: 'Conservacion Extraordinaria', link: '#' }
        ];

        return (
            <div className="Template" >
                <div className="wrapper">
                    {/* <!-- Sidebar Holder --> */}
                    <nav id="sidebar" className={this.state.showSidenav ? 'active' : null}>
                        <div className="sidebar-header">
                            {this.state.showSidenav ?
                                <Glyphicon glyph="align-justify" className="burger-menu" onClick={this.toggleSidenav} />
                                :
                                <div className="logo-area-template">
                                    <img src={logoMenu} alt="logo" className="logo-navbar" />
                                    <Glyphicon glyph="glyphicon glyphicon-chevron-left" className="arrow-template" onClick={this.toggleSidenav} />
                                </div>
                            }
                        </div>

                        <ul className="list-unstyled components">

                            <li>
                                <Link to="/home"><i className="glyphicon glyphicon-home"></i>Inicio</Link>

                            </li>
                            <li>
                                <NavItem onClick={() => this.setState({ actModalShow: true })} ><i className="glyphicon glyphicon-duplicate"></i>Actuaciones</NavItem>
                                <ActuacionesModal show={this.state.actModalShow} onHide={modalClose} listopts={actModal} />

                            </li>
                            <li>
                                <Link to="/administracion"><i className="glyphicon glyphicon-cog"></i>Administracion</Link>

                            </li>
                            <li>
                                <a href="#">
                                    <i className="glyphicon glyphicon-log-out"></i>
                                    Logout
                        </a>
                            </li>
                        </ul>
                    </nav>

                    {/* <!-- Page Content Holder --> */}
                    <div id="content">
                        {children}
                    </div>
                </div>

            </div>
        );
    }
}

class ButtonToggle extends Component {
    render() {
        return (
            <div>
                <button type="button" id="sidebarCollapse" onClick={this.props.toggleMenu} className="btn btn-info navbar-btn" >
                    <i className="glyphicon glyphicon-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
            </div>

        );
    }
}

const ListOptions = ({ options, hide }) => (
    <ul className="list-unstyled components">

        {options.map(opt => (
            <li>
                <Link to={opt.link} onClick={hide}>{opt.title}</Link>
            </li>
        ))}
    </ul>
);
class ActuacionesModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Elija tipo de actuacion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListOptions options={this.props.listopts} hide={this.props.onHide} />

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
