// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';

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
                <List>
                    <ListItem><Link to={'/home'}> /home へ遷移して HomeContainer をマウント </Link></ListItem>
                    <ListItem><Link to={'/another'}> /another へ遷移して AnotherContainer をマウント </Link></ListItem>
                </List>
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
