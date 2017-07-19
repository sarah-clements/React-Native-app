import React, { Component } from 'react';
import { StyleSheet, Text, View, List, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetchData, navigateToItemDetailsView } from '../actions/actions.js';
import Item from './Item.js';

export class ItemList extends React.Component {
    
    componentDidMount() {
        this.props.fetchData('https://www.reddit.com/.json');
    }
    
    render() {
        return (
            // <ScrollView>
            <View style={styles.container}>
                
                    {this.props.items.map((item) => (
                        <Item key={item.data.id} navigateToDetailsView={this.props.navigateToDetailsView} item={item} />
                    ))} 
                    </View>
                // </ScrollView>
            
        );       
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
        navigateToDetailsView: (selectedItemId) => dispatch(navigateToItemDetailsView(selectedItemId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
