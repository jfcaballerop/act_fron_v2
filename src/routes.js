import React from 'react'
import { Route, Switch } from 'react-router-dom';


// Components
import App from './containers/App';
import Login from './containers/Login'
import Home from './containers/Home'
// import Home from './components/Home'
// import AdminUser from './components/AdminUser'
// import GenericList from './components/GenericListData'
// import Page404 from './components/Page404'
// import createBrowserHistory from 'history/createBrowserHistory'


// const history = createBrowserHistory()

const AppRoutes = () =>

    <App>
        <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Login} />

        </Switch>

    </App>;

export default AppRoutes;

