import {ViewNames} from '../viewNames.js';

const initialState = {
    currentView: ViewNames.itemList,  
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
            newState = {currentView: ViewNames.itemDetails, items: state.items, selectedItemId: action.selectedItemId};
            break;
         case 'NAVIGATE_TO_ITEM_LIST_VIEW':
            newState = {currentView: ViewNames.itemList, items: state.items};
            break;
        default:
            newState = state;
    }
    return newState;
}
