import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from '././App.js'

export default class Root extends React.Component {

  render() {
      const store = configureStore();
    return (
      <Provider store={store}>
        <App /> 
    </Provider>
    );
  }
}
