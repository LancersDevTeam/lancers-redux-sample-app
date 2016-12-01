// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state: Object): Object {
    return {};
}

function mapDispatchToProps(dispatch: Function): Object {
    return {};
}

class AnotherContainer extends Component {
    props: {};
    render() {
        return (
            <div>
                <h1>AnotherContainer</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotherContainer);
