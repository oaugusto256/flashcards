import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/Home';
import DeckScreen from './src/screens/Deck';
import CreateDeckScreen from './src/screens/CreateDeck';
import AddCardScreen from './src/screens/AddCard';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CreateDeck: CreateDeckScreen,
    Deck: DeckScreen,
    AddCard: AddCardScreen,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}