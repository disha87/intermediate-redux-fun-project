import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import chatReducer from './reducer';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

let store = createStore(
    chatReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

registerServiceWorker();
