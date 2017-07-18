import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../reducers/reducer.js';

export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    );
}