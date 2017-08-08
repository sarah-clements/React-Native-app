import React, { Component } from 'react';
import { Button, Text, View, Image } from 'react-native';
import { styles } from '../styles.js';

export default class ItemDetails extends React.Component {
    
    _onPress = () => {
        this.props.navigateToItemListView();
    }

    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.subtitle}>{this.props.item.data.subreddit_name_prefixed}</Text>
                    </View>
                    <View>
                        <Text style={styles.header}>{this.props.item.data.title}</Text>
                    </View>
                    <View style={styles.row}>
                        {this.props.item.data.thumbnail !== "self" && this.props.item.data.thumbnail !== "default" && 
                        this.props.item.data.thumbnail !== "nsfw" ? 
                        <Image
                            style={styles.thumbnail_large}
                            source={{uri: this.props.item.data.preview.images[0].source.url}}
                        /> : <Image />}
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.upvotes}>Upvotes: {this.props.item.data.ups}</Text>    
                        <Text style={styles.author}>By {this.props.item.data.author}</Text>
                    </View>
                    <Button
                    onPress={this._onPress}
                    title="Back"
                    color="#841584"
                    /> 
                </View>      
            </View> 
        );       
    }
}


