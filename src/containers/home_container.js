// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div>
                <h1>HomeContainer</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
