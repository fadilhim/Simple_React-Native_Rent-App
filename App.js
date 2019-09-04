import React, { Component } from 'react';
import AppNavigation from './src/routes/AppNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }
}