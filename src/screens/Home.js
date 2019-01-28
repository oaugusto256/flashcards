import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';

const cards = [
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
        <View style={styles.header}>
          <Text style={styles.textHeader}>Home</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.text}>Select a deck to play or edit, or create a new one!</Text>
            <Card card={cards[0]} />
            <Card card={cards[1]} />
            <Card card={cards[2]} />
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
  header: {
    height: 60,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#393e46',
    shadowRadius: 1,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
  },
  textHeader: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    height: 60,
    padding: 7.5,
    shadowRadius: 1,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    shadowOffset: { width: 0, height: 1 },
  },
  cardTextName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonAdd: {
    flex: 1,
    zIndex: 2,
    right: 0,
    bottom: 0,
    width: 60,
    height: 60,
    margin: 25,
    padding: 5,
    borderRadius: 5,
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