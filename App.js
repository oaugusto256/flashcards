import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Home from './src/screens/Home';

export default class App extends Component {
  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}