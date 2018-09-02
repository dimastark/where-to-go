import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from 'components/app';
import store from 'store';

import './index.css';

ReactDOM.render(renderApp(), document.getElementById('root'));

function renderApp() {
    return (
        <Provider store={store}>
            <HashRouter hashType="noslash">
                <App/>
            </HashRouter>
        </Provider>
    );
}
