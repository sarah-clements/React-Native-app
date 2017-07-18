import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
// import ItemList from './components/ItemList.js';
 import Header from './components/Header.js';

export default class App extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            items: props.items, //provided by connect@mapStateToProps
            filteredItems: this.filterItems(props.items, props.filters),
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filteredItems: this.filterItems(this.state.items, nextProps.filters),
        });
    }
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
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

module.exports = connect(
    //mapStateToProps,
    (state) => {
        items: state.items
    }
)(ItemsContainer);
