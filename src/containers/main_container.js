// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
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
                    <ListItem><a href="#/home"> /home へ遷移して HomeContainer をマウント </a></ListItem>
                    <ListItem><a href="#/another"> /another へ遷移して AnotherContainer をマウント </a></ListItem>
                </List>
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
