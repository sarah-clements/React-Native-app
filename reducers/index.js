import { combineReducers } from 'redux';
import { items } from './reducers_items';

export default combineReducers({
    items,
    //itemsHasErrored
});