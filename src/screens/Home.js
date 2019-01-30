import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import DeckCard from '../components/DeckCard';
import ButtonAddDeck from '../components/ButtonAddDeck';
import EmphasizeText from '../components/EmphasizeText';

const decks = [
  {
    name: 'React',
    cards: 3
  },
  {
    name: 'Redux',
    cards: 19
  },
  {
    name: 'Udacity',
    cards: 7
  }
]

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#393e46',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#393e46"
        />
        <View style={styles.screen}>
          <ScrollView>
            <View style={styles.content}>
              <Text style={styles.introText}>Welcome!</Text>
              <Text style={styles.text}>Select a deck to <EmphasizeText text={'play'}/> or <EmphasizeText text={'edit'}/> at the list below, or <EmphasizeText text={'create'}/> a new one with the button at the bottom.
              </Text>
              <DeckCard deck={decks[0]} />
              <DeckCard deck={decks[1]} />
              <DeckCard deck={decks[2]} />
            </View>
          </ScrollView>
          <ButtonAddDeck
            onPress={() => this.props.navigation.navigate('CreateDeck')}
          />
        </View>
      </>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  introText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  emphasizeText: {
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 15,
  }
})