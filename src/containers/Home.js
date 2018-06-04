import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Home.scss";

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
        <div className="wrapper">
          {/* <!-- Sidebar Holder --> */}
          <nav id="sidebar" className={this.state.showSidenav ? 'active' : null}>
            <div className="sidebar-header">
              <h3>Bootstrap Sidebar</h3>
              <strong>BS</strong>
            </div>

            <ul className="list-unstyled components">
              <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                  <i className="glyphicon glyphicon-home"></i>
                  Home
                        </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li><a href="#">Home 1</a></li>
                  <li><a href="#">Home 2</a></li>
                  <li><a href="#">Home 3</a></li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-briefcase"></i>
                  About
                        </a>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                  <i className="glyphicon glyphicon-duplicate"></i>
                  Pages
                        </a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li><a href="#">Page 1</a></li>
                  <li><a href="#">Page 2</a></li>
                  <li><a href="#">Page 3</a></li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-link"></i>
                  Portfolio
                        </a>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-paperclip"></i>
                  FAQ
                        </a>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-send"></i>
                  Contact
                        </a>
              </li>
            </ul>

            <ul className="list-unstyled CTAs">
              <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a></li>
              <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
            </ul>
          </nav>

          {/* <!-- Page Content Holder --> */}
          <div id="content">

            <nav className="navbar navbar-default">
              <div className="container-fluid">

                <div className="navbar-header">
                  <ButtonToggle toggleMenu={this.toggleSidenav} />


                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                  </ul>
                </div>
              </div>
            </nav>

            <h2>Collapsible Sidebar Using Bootstrap 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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