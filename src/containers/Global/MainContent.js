import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components


class MainContent extends Component {
    static PropTypes = {
        body: PropTypes.object.isRequired
    };

    render() {
        const { body } = this.props;

        return (
            <div className="content">
                {body}
            </div>
        );
    }
}

export default MainContent;