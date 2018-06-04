import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.scss";
import ROUTESNAME from '../services/routesName.js'
import jwtDecode from 'jwt-decode'
import axios from 'axios';


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
        this.setState({
          isAuthenticated: true,
          error: false
        });
        console.log('LOGIN OK')
        alert("Logged in");
        this.props.history.push("/home");


      } else {
        this.setState({
          isAuthenticated: false,
          error: true
        })
        this.refs.login.value = ""
        this.refs.password.value = ""
      }
    })
      .catch(error => {
        this.setState({
          isAuthenticated: false,
          error: true
        })
        this.refs.login.value = ""
        this.refs.password.value = ""
      });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="login" bsSize="large">
            <ControlLabel>login</ControlLabel>
            <FormControl
              autoFocus
              type="login"
              value={this.state.login}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Entrar
          </Button>
        </form>
      </div>
    );
  }
}