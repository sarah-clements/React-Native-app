import React from 'react';
import _ from 'lodash';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ItemList from './ItemList.js';
import ItemDetails from './ItemDetails.js';
import { itemsFetchData, navigateToItemDetailsView, navigateToItemListView } from '../actions/actions.js';
import {itemListViewName, itemDetailsViewName} from '../viewNames.js';
import Header from './Header.js';

export class Container extends React.Component {

    render() {
        let currentView = null;
        switch (this.props.currentView) {
            case itemListViewName:
                currentView = <ItemList items={this.props.items} />;
                break;
            case itemDetailsViewName:
                const selectedItem = _.find(this.props.items, item => item.data === this.props.selectedItemId);
                currentView = <ItemDetails item={selectedItem} navigateToItemListView={this.props.navigateToItemListView}/>;
                break;
            default:
                currentView = <ItemList items={this.props.items} />;
            }

        return (
            <View style={styles.container}>
                <Header /> 
            {currentView}
            </View>
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    return {
        items: state.items,
        selectedItemId: state.selectedItemId,
        currentView: state.currentView
    };     
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        navigateToDetailsView: (selectedItemId) => dispatch(navigateToItemDetailsView(selectedItemId)),
        navigateToItemListView: () => dispatch(navigateToItemListView())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

