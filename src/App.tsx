
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { StatusBar } from "react-native";

import configureStore from "./store/configureStore";
import NavigationContainer from './Navigation/Navigator';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <StatusBar backgroundColor="#012" barStyle="light-content" />
        <NavigationContainer />
      </Provider>
    );
  }
}