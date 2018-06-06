import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.scss";
import ROUTESNAME from '../services/routesName.js'
import jwtDecode from 'jwt-decode'
import axios from 'axios';
import Logo from '../assets/images/logo_header.png'
import LogoInes from '../assets/images/logo_i3met.png'


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      password: "",
      login: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.login.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }


  handleSubmit = event => {
    event.preventDefault();
    axios.post(ROUTESNAME.autenticate(), {
      login: this.state.login,
      password: this.state.password
    }).then(response => {
      let sessionObject, resultado

      if (response.status === 200) {
        resultado = jwtDecode(response.data.auth_token)

        sessionObject = {
          expiresAt: resultado["exp"],
          user: {
            token: response.data.auth_token
          }
        }
        sessionStorage.setItem('sessionUserSga', JSON.stringify(sessionObject));
        console.log('LOGIN OK')
        // alert("Logged in");
        this.props.userHasAuthenticated(true);
        this.props.history.push("/home");


      } else {
        this.props.userHasAuthenticated(false);
        this.refs.login.value = ""
        this.refs.password.value = ""
      }
    })
      .catch(error => {
        this.props.userHasAuthenticated(false);

        this.refs.login.value = ""
        this.refs.password.value = ""
      });
  }

  render() {
    return (
      <div>
        <img src={Logo} className="logo" alt="logo" />
        <div className="parent">
          <form onSubmit={this.handleSubmit} className="form_login">
            <FormGroup controlId="login" bsSize="large">
              <ControlLabel>login</ControlLabel>
              <FormControl
                className="input-login"
                autoFocus
                type="login"
                value={this.state.login}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>password</ControlLabel>
              <FormControl
                className="input-login"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              className="login-button"
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Entrar
            </Button>
            {this.state.error && <span className="error-span" > Credenciales no validas </span>}
            <div class="form-login-footer">
              <p> Developed by <br />
                <a href="https://ines.es/"> INES Ingenieros Consultores </a>
              </p> <img src={LogoInes} className="logo-ines" alt="logo" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}