import { combineReducers } from 'redux';

// Example reducer for managing user state
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};

// Example reducer for managing posts state
const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.payload.id);
        default:
            return state;
    }
};

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
});

export default rootReducer;