import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configure_store';
import MainContainer from './containers/main_container';

export const store = configureStore();

// https://github.com/callemall/material-ui/issues/4670
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <MainContainer />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
)
