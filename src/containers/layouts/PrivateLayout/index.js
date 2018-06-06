import React, { Component } from 'react';

import { Redirect, Link, BrowserRouter } from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'

import Template from '../../Template'


class Header extends Component {
    render() {
        return (
            <div className="Header"></div>

        )
    }
}
class Footer extends Component {
    render() {
        return (
            <div className="Footer"></div>

        )
    }
}
/* PrivateLayout component definition */
const PrivateLayout = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {

                if (authed === true) {
                    return (
                        <div className="PrivateLayout">
                            <header>
                                <Header />
                            </header>
                            <main>
                                <Template> <Component {...props} /> </Template>
                            </main>
                            <footer>
                                <Footer />
                            </footer>
                        </div>
                    )

                } else {

                    return (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
                }
            }
            }
        />
    )
}

export default PrivateLayout;