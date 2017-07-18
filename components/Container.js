import React from 'react';
import _ from 'lodash';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ItemList from './ItemList.js';
import ItemDetails from './ItemDetails.js';
import {itemListViewName, itemDetailsViewName} from '../viewNames.js';
 //import Header from './components/Header.js';

export class Container extends React.Component {

  render() {
    let currentView = null;
    console.log("current view" + this.props.viewName);
    switch (this.props.viewName) {
        case itemListViewName:
            currentView = <ItemList items={this.props.items} />;
            break;
        case itemDetailsViewName:
            const selectedItem = _.find(this.props.items, item => item.data.id === selectedItemId);
            console.log("selected item " + selectedItem);
            currentView = <ItemDetails item={selectedItem}/>;
            break;
        default:
            currentView = <ItemList items={this.props.items} />;
    }

    return (
      <View style={styles.container}>
        {currentView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

