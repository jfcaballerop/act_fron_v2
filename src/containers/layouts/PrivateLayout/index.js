import React, { Component } from 'react';

import { Redirect, Link, BrowserRouter } from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'

import Template from '../../Template'



/* PrivateLayout component definition */
const PrivateLayout = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Template> <Component {...props} /> </Template>
                : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
        />
    )
}

export default PrivateLayout;