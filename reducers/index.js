import { combineReducers } from 'redux';
import { items, itemsHasErrored } from './reducers_items';

export default combineReducers({
    items,
    // itemsHasErrored
});