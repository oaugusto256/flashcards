import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import DeckCard from '../components/DeckCard';

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

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Header text={'Home'} />
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.text}>Select a deck to play or edit at the list, or create a new one with the button at the bottom!</Text>
            <DeckCard deck={decks[0]} />
            <DeckCard deck={decks[1]} />
            <DeckCard deck={decks[2]} />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    height: height,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  buttonAdd: {
    flex: 1,
    zIndex: 2,
    right: 0,
    bottom: 0,
    width: 60,
    height: 60,
    padding: 5,
    borderRadius: 5,
    marginRight: 30,
    marginBottom: 30,
    position: 'absolute',
    backgroundColor: '#00adb5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold'
  }
})