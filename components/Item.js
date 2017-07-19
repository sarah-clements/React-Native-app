import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';

export default class Item extends React.Component {
    
    _onPress = () => {
        this.props.navigateToDetailsView(this.props.item.data);
    }
    
    render() {      
        return ( 
            <TouchableHighlight underlayColor="white" style={styles.container} onPress={this._onPress}>
                <View style={styles.section}>
                    <Text style={styles.header}>{this.props.item.data.title}</Text>
                    <View style={styles.row}>
                        <Text style={styles.author}>By {this.props.item.data.author}</Text>
                        <Text style={styles.upvotes}>Upvotes: {this.props.item.data.ups}</Text>    
                    </View>
                </View>            
            </TouchableHighlight>     
        );       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    section: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,   
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    row: {
        flex: 1, flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    author: {
        height: 44,
        textAlign: 'right'
    },
    upvotes: {
        textAlign: 'left'
    }
})
