import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Redirect, Link, BrowserRouter } from 'react-router-dom'

// Layouts containers
import DefaultLayout from './containers/layouts/DefaultLayout'
import PrivateLayout from './containers/layouts/PrivateLayout'
import { withRouter } from 'react-router-dom'

// Components
import Login from './containers/Login'
import Template from './containers/Template'
import Home from './containers/Home'
import ActuacionesConsOrd from './containers/ActuacionesConsOrd'
import Administracion from './containers/Administracion'
import AdministracionUsers from './containers/AdministracionUsers'
import NotFound from "./containers/NotFound";



const AppRoutes = ({ authed, childProps }) =>

    <Switch>
        <DefaultLayout path="/" exact component={Login} childProps={childProps} />
        <PrivateLayout path='/home' authed={authed} component={Home} childProps={childProps} />
        <PrivateLayout path='/actuacionesconsord' exact authed={authed} component={ActuacionesConsOrd} childProps={childProps} />
        <PrivateLayout path='/administracion' exact authed={authed} component={Administracion} childProps={childProps} />
        <PrivateLayout path="/administracion/usuarios" exact authed={authed} component={AdministracionUsers} childProps={childProps} />
        <PrivateLayout path="/administracion/grupos" exact authed={authed} component={Administracion} childProps={childProps} />
        <PrivateLayout path="/administracion/roles" exact authed={authed} component={Administracion} childProps={childProps} />
        <PrivateLayout path="/administracion/cecos" exact authed={authed} component={Administracion} childProps={childProps} />
        <PrivateLayout path="/administracion/cebes" exact authed={authed} component={Administracion} childProps={childProps} />
        <Route component={NotFound} />
    </Switch>

export default AppRoutes;

