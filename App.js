import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/Home';
import CreateDeckScreen from './src/screens/CreateDeck';
import DeckScreen from './src/screens/Deck';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CreateDeck: CreateDeckScreen,
    Deck: DeckScreen
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