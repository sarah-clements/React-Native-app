import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Container from './components/Container.js';
 //import Header from './components/Header.js';
const store = configureStore();

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}> 
        <Container />
     </Provider>  
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

