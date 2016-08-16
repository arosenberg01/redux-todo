'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './containers/App.jsx';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(todoApp, preloadedState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
