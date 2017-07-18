import {itemListViewName, itemDetailsViewName} from '../viewNames.js';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

const initialState = {
    currentView: itemListViewName,  
    items: [],
    selectedItemId: null
}

export function reducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            newState = {currentView: state.currentView, items: action.items};
            break;
        case 'NAVIGATE_TO_ITEM_DETAILS_VIEW':
            newState = {currentView: itemDetailsViewName, items: state.items, selectedItemId: action.selectedItemId};
            break;
         case 'NAVIGATE_TO_ITEM_LIST_VIEW':
            newState = {currentView: itemListViewName, items: state.items};
            break;
        default:
            newState = state;
    }
    return newState;
}
