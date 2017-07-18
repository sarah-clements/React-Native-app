import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ItemList from './components/ItemList.js';
 //import Header from './components/Header.js';
const store = configureStore();
export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}> 
        {/* <View style={styles.container}> */}
          <ItemList items={this.props.items} />
        {/* </View> */}
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

// module.exports = connect(
//     //mapStateToProps,
//     (state) => {
//         items: state.items
//     }
// )(App);
