// @flow
import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';

class ApiCallResultComponent extends Component {
    props: {
        qiitaUsers: any;
    };
    render() {
        return (
            <div>
                <h2>Qiita のユーザー一覧取得 API コールの結果を表示するコンポーネント</h2>
                <List>
                    {this.props.qiitaUsers.data.map((qiitaUser, i) =>
                        <ListItem
                            key={i}
                            primaryText={qiitaUser.id}
                        />,
                    )}
                </List>


            </div>
        );
    }
}

export default ApiCallResultComponent;
