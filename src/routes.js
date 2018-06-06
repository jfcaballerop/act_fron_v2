import React from 'react'
import { Route, Switch } from 'react-router-dom';


// Components
import Login from './containers/Login'
import Template from './containers/Template'
import Home from './containers/Home'
import ActuacionesConsOrd from './containers/ActuacionesConsOrd'
import Administracion from './containers/Administracion'
import AdministracionUsers from './containers/AdministracionUsers'

// import Home from './components/Home'
// import AdminUser from './components/AdminUser'
// import GenericList from './components/GenericListData'
// import Page404 from './components/Page404'
// import createBrowserHistory from 'history/createBrowserHistory'


// const history = createBrowserHistory()

const AppRoutes = () =>

    <Switch>
        <Route path="/" exact component={Login} />
        <Template>
            <Route path="/home" exact component={Home} />
            <Route path="/actuacionesconsord" exact component={ActuacionesConsOrd} />
            <Route path="/administracion" exact component={Administracion} />
            <Route path="/administracion/usuarios" exact component={AdministracionUsers} />
            <Route path="/administracion/grupos" exact component={Administracion} />
            <Route path="/administracion/roles" exact component={Administracion} />
            <Route path="/administracion/cecos" exact component={Administracion} />
            <Route path="/administracion/cebes" exact component={Administracion} />
        </Template>

    </Switch>

export default AppRoutes;

