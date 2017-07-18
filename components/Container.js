import React from 'react';
import _ from 'lodash';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ItemList from './ItemList.js';
import ItemDetails from './ItemDetails.js';
import { itemsFetchData, navigateToItemDetailsView } from '../actions/actions.js';
import {itemListViewName, itemDetailsViewName} from '../viewNames.js';
import Header from './Header.js';

export class Container extends React.Component {

  render() {
    let currentView = null;
    console.log("current view" + this.props.currentView);
    switch (this.props.currentView) {
        case itemListViewName:
            currentView = <ItemList items={this.props.items} />;
            break;
        case itemDetailsViewName:
            const selectedItem = _.find(this.props.items, item => item.data === this.props.selectedItemId);
            console.log("selected item " + selectedItem);
            currentView = <ItemDetails item={selectedItem}/>;
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
    backgroundColor: 'rgba(247,247,247,1.0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  console.log("mapStateToProps state.currentView " + state.currentView + "and state.selectedItemId " + state.selectedItemId)
    return {
         items: state.items,
         selectedItemId: state.selectedItemId,
         currentView: state.currentView
    };     
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        navigateToDetailsView: (selectedItemId) => dispatch(navigateToItemDetailsView(selectedItemId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

