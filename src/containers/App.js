// Imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

// Assets
import logo from '../assets/logo.svg';
import './App.scss';

//Components
import AppRoutes from '../routes'
import Login from "./Login";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  render() {
    const { children, match, location, history } = this.props;
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App">
        {children}
        <AppRoutes />
      </div>

    );
  }
}

export default withRouter(App);