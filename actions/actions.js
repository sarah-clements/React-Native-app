export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsFetchDataSuccess(response) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: response.data.children
    };
}

export function navigateToItemDetailsView(selectedItemId) {
    return {
        type: 'NAVIGATE_TO_ITEM_DETAILS_VIEW',
        selectedItemId: selectedItemId
    };
}

export function navigateToItemListView() {
    return {
        type: 'NAVIGATE_TO_ITEM_LIST_VIEW'
    };
}

export function itemsFetchData(url) {
    console.log(itemsFetchData);
    return (dispatch) => {
        // dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                //dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}