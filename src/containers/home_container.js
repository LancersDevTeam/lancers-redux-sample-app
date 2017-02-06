// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import loggedInRequired from './common/logged_in_required';
import './home.css';

function mapStateToProps(state: Object): Object {
    return {};
}

function mapDispatchToProps(dispatch: Function): Object {
    return {};
}

class HomeContainer extends Component {
    props: {};
    render() {
        return (
            <div styleName="container">
                <h1>HomeContainer</h1>
            </div>
        );
    }
}

HomeContainer = compose(
    loggedInRequired,
    connect(mapStateToProps, mapDispatchToProps),
)(HomeContainer)

export default HomeContainer;
