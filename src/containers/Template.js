import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Glyphicon } from "react-bootstrap";
import "./App.scss";
import logoMenu from "../assets/images/logo_header.png"

export default class Template extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSidenav: false,
            admin_collapse: true,
            actuacion_collapse: true,
        };
    }
    toggleSidenav = () => {
        this.setState({ showSidenav: !this.state.showSidenav });

    }

    render() {
        const { children } = this.props;

        return (
            <div className="Template">
                <div className="wrapper">
                    {/* <!-- Sidebar Holder --> */}
                    <nav id="sidebar" className={this.state.showSidenav ? 'active' : null}>
                        <div className="sidebar-header">
                            {this.state.showSidenav ? 
                            <Glyphicon glyph="align-justify" className="burger-menu" onClick={this.toggleSidenav}/>
                            : 
                            <div className="logo-area-template">
                                <img src={logoMenu} alt="logo" className="logo-navbar" />
                                <Glyphicon glyph="glyphicon glyphicon-chevron-left" className="arrow-template" onClick={this.toggleSidenav} />
                            </div>
                            }
                        </div>

                        <ul className="list-unstyled components">
                            <li className="active">
                                <a href="#homeSubmenu" >
                                    <i className="glyphicon glyphicon-home"></i>
                                    Home
                        </a>
                            </li>
                            <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                                    <i className="glyphicon glyphicon-duplicate"></i>
                                    Actuaciones
                        </a>
                                <ul className="collapse list-unstyled" id="pageSubmenu">
                                    <li><a href="#">Obras</a></li>
                                    <li><a href="#">Actuaciones Ordinarias</a></li>
                                    <li><a href="#">Actuaciones Extraordinarias</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#AdminPageSub" data-toggle="collapse" aria-expanded="false">
                                    <i className="  glyphicon glyphicon-cog"></i>
                                    Administración
                        </a>
                                 <ul className="collapse list-unstyled" id="AdminPageSub">
                                    <li><a href="#">Usuarios</a></li>
                                    <li><a href="#">Grupos</a></li>
                                    <li><a href="#">Roles</a></li>
                                    <li><a href="#">Cebes</a></li>
                                </ul>
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