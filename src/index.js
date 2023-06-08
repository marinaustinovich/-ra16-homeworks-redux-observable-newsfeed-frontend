import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from 'react-redux';

const root = document.getElementById('root');

if (root !== null) {
    const appRoot = ReactDOM.createRoot(root);
    appRoot.render(
        <Provider store={store}>
        <App />
        </Provider>
    );
}

serviceWorker.unregister();
