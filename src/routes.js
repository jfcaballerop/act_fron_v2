import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Redirect, Link, BrowserRouter } from 'react-router-dom'

// Layouts containers
import DefaultLayout from './containers/layouts/DefaultLayout'
import PrivateLayout from './containers/layouts/PrivateLayout'

// Components
import Login from './containers/Login'
import Template from './containers/Template'
import Home from './containers/Home'
import ActuacionesConsOrd from './containers/ActuacionesConsOrd'
import Administracion from './containers/Administracion'
import AdministracionUsers from './containers/AdministracionUsers'
import NotFound from "./containers/NotFound";

// import Home from './components/Home'
// import AdminUser from './components/AdminUser'
// import GenericList from './components/GenericListData'
// import Page404 from './components/Page404'
// import createBrowserHistory from 'history/createBrowserHistory'


// const history = createBrowserHistory()

const AppRoutes = ({ authed }) =>

    <Switch>
        <DefaultLayout path="/" exact component={Login} />
        <PrivateLayout path='/home' exact authed={authed} component={Home} />
        <PrivateLayout path='/actuacionesconsord' exact authed={authed} component={ActuacionesConsOrd} />
        <PrivateLayout path='/administracion' exact authed={authed} component={Administracion} />
        <PrivateLayout path="/administracion/usuarios" exact authed={authed} component={AdministracionUsers} />
        <PrivateLayout path="/administracion/grupos" exact authed={authed} component={Administracion} />
        <PrivateLayout path="/administracion/roles" exact authed={authed} component={Administracion} />
        <PrivateLayout path="/administracion/cecos" exact authed={authed} component={Administracion} />
        <PrivateLayout path="/administracion/cebes" exact authed={authed} component={Administracion} />
        <Route component={NotFound} />
    </Switch>

export default AppRoutes;

