import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import   thunk  from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

const store = createStore(rootReducer,undefined, composeWithDevTools(applyMiddleware(thunk)));
const history = createBrowserHistory();
ReactDOM.render(
<Provider store={store}>
    <App/>
    </Provider>,
document.getElementById('root'));
