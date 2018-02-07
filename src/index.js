import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { chatReducer } from './reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(chatReducer);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

registerServiceWorker();
