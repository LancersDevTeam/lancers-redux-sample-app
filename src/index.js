// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configure_store';
import MainContainer from './containers/main_container';
import HomeContainer from './containers/home_container';
import AnotherContainer from './containers/another_container';

export const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

// https://github.com/callemall/material-ui/issues/4670
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Router history={history}>
                <Route path="/" component={MainContainer} >
                    <IndexRoute component={HomeContainer} />
                    <Route path="/home" component={HomeContainer} />
                    <Route path="/another" component={AnotherContainer} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
)
