// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiCallResultComponent from '../components/api_call_result_component';

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
                <ApiCallResultComponent />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotherContainer);
