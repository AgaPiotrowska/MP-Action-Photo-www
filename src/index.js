import React from 'react';
import './styles/App.scss';
import App from './components/App';
import {render} from "react-snapshot";
import {createStore} from "redux";
import allReducers from "./reducers";
import {Provider} from "react-redux";

/* eslint-disable no-underscore-dangle */

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

/* eslint-enable */
render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
document.getElementById('root')
);

