// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

function mapStateToProps(state: Object): Object {
    return {};
}

function mapDispatchToProps(dispatch: Function): Object {
    return {};
}

class MainContainer extends Component {

    props: {};

    render() {
        return (
            <div>
                <AppBar title={'Template App'} />
                <h1>HELLO WORLD</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
