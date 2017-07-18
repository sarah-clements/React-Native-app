// export function itemsHasErrored(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_HAS_ERRORED':
//             return action.hasErrored;
//         default:
//             return state;
//     }
// }
const initialState = { 
    items: []
    // items:[{
    //     "kind": "t3",
    //     "data": {     
    //         "author": "skiroads",
    //         "score": 14128,
    //     }
    // }]
}

export function items(state = initialState, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action;
        default:
            return state;
    }
}
