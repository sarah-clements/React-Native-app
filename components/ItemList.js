import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items.js';

export default class ItemList extends React.Component {
    
    componentDidMount() {
        this.props.fetchData('https://www.reddit.com/.json');
    }
    
    render() {
        // if (this.state.hasErrored) {
        //     return <p>Sorry! There was an error loading the items</p>;
        // }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        //hasErrored: state.itemsHasErrored
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

//export connect(mapStateToProps, mapDispatchToProps);
