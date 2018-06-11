// Imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import * as authService from '../services/AuthService'

// Assets
// import logo from '../assets/logo.svg';
import './App.scss';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

//Components
import AppRoutes from '../routes'
// import Login from "./Login";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }
  componentWillMount() {
    console.log(authService.checkTokenExpire())
    this.userHasAuthenticated(authService.checkTokenExpire());


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
      <AppRoutes authed={this.state.isAuthenticated} childProps={childProps} />

    );
  }
}

export default withRouter(App);