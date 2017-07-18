import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items.js';

export class ItemList extends React.Component {
    
    // componentDidMount() {
    //     this.props.fetchData('https://www.reddit.com/.json');
    // }
    
    render() {
        // if (this.state.hasErrored) {
        //     return <p>Sorry! There was an error loading the items</p>;
        // }
            console.log(this.props.items);
        return (
            <View style={styles.container}>
                <Text>{this.props.items.items[0].data.author}</Text>
            </View>
            // <ul>
            //     {this.props.items.items.map((item) => (
            //         //update later
            //         <li key={item.kind}>
            //             {item.data}
            //         </li>
            //     ))}
            // </ul>
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

export default connect( (state) => {
    return {
         items: state.items
    };     
}
)(ItemList);

