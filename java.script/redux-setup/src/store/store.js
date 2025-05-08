import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// import { createLogger } from 'redux-logger'; // Uncomment if you want to use redux-logger

// const logger = createLogger(); // Uncomment if you want to use redux-logger

const store = createStore(
    rootReducer,
    // applyMiddleware(logger) // Uncomment if you want to use redux-logger
);

export default store;