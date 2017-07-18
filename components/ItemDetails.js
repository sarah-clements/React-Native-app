import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ItemDetails extends React.Component {
    
    render() {
       
        return ( 
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.header} onPress={this._onPress}>{this.props.item.data.title}</Text>
                    <View style={styles.row}>
                        <Text style={styles.author} onPress={this._onPress}>By {this.props.item.data.author}</Text>
                        <Text style={styles.upvotes} onPress={this._onPress}>Upvotes: {this.props.item.data.ups}</Text>    
                    </View>
                </View>            
            </View>     
        );       
    }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '#fff'
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

