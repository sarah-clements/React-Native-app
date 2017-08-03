import React from 'react';
import _ from 'lodash';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import ItemList from './ItemList.js';
import ItemDetails from './ItemDetails.js';
import {itemsFetchData, navigateToItemDetailsView, navigateToItemListView} from '../actions/actions.js';
import {ViewNames} from '../viewNames.js';
import Header from './Header.js';

export class Container extends React.Component {

    render() {
        let currentView = null;
        switch (this.props.currentView) {
            case ViewNames.itemList:
                currentView = <ItemList items={this.props.items} />;
                break;
            case ViewNames.itemDetails:
                const selectedItem = _.find(this.props.items, item => item.data === this.props.selectedItem);
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
        selectedItem: state.selectedItem,
        currentView: state.currentView
    };     
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        navigateToDetailsView: (selectedItem) => dispatch(navigateToItemDetailsView(selectedItem)),
        navigateToItemListView: () => dispatch(navigateToItemListView())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

