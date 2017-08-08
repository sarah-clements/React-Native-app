import React, { Component } from 'react';
import { TouchableHighlight, Text, View, Image } from 'react-native';
import { styles } from '../styles.js';

export default class Item extends React.Component {
    
    _onPress = () => {
        this.props.navigateToDetailsView(this.props.item.data);
    }
    
    render() {      
        return ( 
            <TouchableHighlight underlayColor="white" style={styles.container} onPress={this._onPress}>
                <View style={styles.section}>
                    <View style={styles.row}>
                         {this.props.item.data.thumbnail !== "self" && this.props.item.data.thumbnail !== "default" &&
                         this.props.item.data.thumbnail !== "nsfw" ? 
                        <Image
                            style={styles.thumbnail}
                            source={{uri: this.props.item.data.thumbnail}}
                        /> : <Image />} 
                        <Text style={styles.header} numberOfLines={2}>{this.props.item.data.title}</Text>
                    </View>
                    <View style={styles.row}>
                         <Text style={styles.upvotes}>Upvotes: {this.props.item.data.ups}</Text>
                        <Text style={styles.author}>By {this.props.item.data.author}</Text>
                    </View>
                </View>           
            </TouchableHighlight>     
        );       
    }
}

