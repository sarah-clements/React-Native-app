import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default class Item extends React.Component {
    
    _onPress = () => {
        this.props.navigateToDetailsView(this.props.item.data.id);
    }
    render() {
       
        return ( 
            <Text onPress={this._onPress}>{this.props.item.data.title}</Text>     
        );       
    }
}
