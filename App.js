/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import RootContainer from './src/Container/RootContainer/RootContainer';
import { Provider } from 'react-redux';
import getStore from './src/store/configureStore';

export default class App extends Component {

  render() {
    const store = getStore();
    return (
      //Set RootContainer with store
      <Provider store={store}>
        <RootContainer /> 
      </Provider>
    );
  }
}

