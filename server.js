// require('babel-register';)

import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import Provider from 'react-redux';
import todoApp from './reducers';
import App from './containers/App.jsx';

const app = Express();
const PORT = 3000;

function handleRender(req, res) {
    const store = createStore(todoApp);
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const preloadedState = store.getState();

    res.send(renderFullPage(html, preloadedState));
};

function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>Redux Universal Example</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
};

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
