// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

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
                <Link to={'/home'}> /home へ遷移 </Link>
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
