import React, { Component } from 'react';
import propTypes from 'prop-types';

class Content extends Component {
    static propTypes = {
        body: propTypes.object.isRequired
    };
    render () {
        const { body } = this.props;
        return (
            <div>
                {body}
            </div>
        );
    }
}

export default Content;