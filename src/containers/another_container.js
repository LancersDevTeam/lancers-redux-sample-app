// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ApiCallResultComponent from '../components/api_call_result_component';
import * as qiitaUsersActions from '../actions/qiita_users_action';

function mapStateToProps(state: Object): Object {
    return {
        qiitaUsers: state.qiitaUsers,
    };
}

function mapDispatchToProps(dispatch: Function): Object {
    return {
        qiitaUsersActions: bindActionCreators(qiitaUsersActions, dispatch),
    };
}

class AnotherContainer extends Component {
    componentWillMount() {
        this.props.qiitaUsersActions.getQiitaUsersStart();
    }
    props: {
        qiitaUsersActions: any;
        qiitaUsers: any;
    };
    render() {
        return (
            <div>
                <h1>AnotherContainer</h1>
                <ApiCallResultComponent qiitaUsers={this.props.qiitaUsers} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotherContainer);
