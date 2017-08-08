export function itemsFetchDataSuccess(response) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: response.data.children
    };
}

export function navigateToItemDetailsView(selectedItem) {
    return {
        type: 'NAVIGATE_TO_ITEM_DETAILS_VIEW',
        selectedItem: selectedItem
    };
}

export function navigateToItemListView() {
    return {
        type: 'NAVIGATE_TO_ITEM_LIST_VIEW'
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
    };
}
