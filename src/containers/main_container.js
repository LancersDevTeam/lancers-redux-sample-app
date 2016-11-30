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
    props: {
        children: any;
    };
    render() {
        return (
            <div>
                <AppBar title={'MainContainer'} />
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);