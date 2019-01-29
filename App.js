import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/Home';
import CreateDeckScreen from './src/screens/CreateDeck';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CreateDeck: CreateDeckScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    return <AppContainer />
  }
}