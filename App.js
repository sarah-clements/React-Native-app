import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Container from './components/Container.js';
import { itemListViewName } from './viewNames.js';

const store = configureStore({
    currentView: itemListViewName,  
    items: [],
    selectedItemId: null
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


