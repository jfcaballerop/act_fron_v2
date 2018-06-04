import React from 'react'
import { Route, Switch } from 'react-router-dom';


// Components
import App from './containers/App';
import Login from './containers/Login'
import Template from './containers/Template'
import Home from './containers/Home'
import Actuaciones from './containers/Actuaciones'
import Administracion from './containers/Administracion'

// import Home from './components/Home'
// import AdminUser from './components/AdminUser'
// import GenericList from './components/GenericListData'
// import Page404 from './components/Page404'
// import createBrowserHistory from 'history/createBrowserHistory'


// const history = createBrowserHistory()

const AppRoutes = () =>

    <App>
        <Switch>
            <Route path="/" exact component={Login} />
            <Template>
                <Route path="/home" exact component={Home} />
                <Route path="/actuaciones" exact component={Actuaciones} />
                <Route path="/administracion" exact component={Administracion} />
            </Template>

        </Switch>

    </App>;

export default AppRoutes;

