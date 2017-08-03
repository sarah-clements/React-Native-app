import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Container from './components/Container.js';
import {ViewNames} from './viewNames.js';

const store = configureStore({
    currentView: ViewNames.itemList,  
    items: [],
    selectedItem: null
});

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ScrollView>
                    <Container />
                </ScrollView>
            </Provider>  
        );
    }
}


