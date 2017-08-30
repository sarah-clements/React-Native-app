import React, { Component } from 'react';
import { StyleSheet, Text, View, List, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetchData, navigateToItemDetailsView } from '../actions/actions.js';
import Item from './Item.js';

export class ItemList extends React.Component {
    
    componentDidMount() {
        {this.props.items.length === 0 ? this.props.fetchData('https://www.reddit.com/.json') : console.log("fetchData not called")}
    }
    
    render() {
        return (
            <View style={styles.container}> 
                {this.props.items.map((item) => (
                    <Item key={item.data.id} navigateToDetailsView={this.props.navigateToDetailsView} item={item} />
                ))} 
            </View>            
        );       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff'
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
        navigateToDetailsView: (selectedItem) => dispatch(navigateToItemDetailsView(selectedItem))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
