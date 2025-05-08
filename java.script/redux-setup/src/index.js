// This file is the entry point of the application. It initializes the Redux store and provides it to the React application using the Provider component from react-redux.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App'; // Assuming you have an App component

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);