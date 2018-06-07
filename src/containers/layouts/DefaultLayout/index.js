import React, { Component } from 'react';
import { Redirect, Link, BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'


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

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="DefaultLayout">
                <header>
                    <Header />
                </header>
                <main>
                    <Component {...matchProps} />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )}
        />
    )
}

export default DefaultLayout;
