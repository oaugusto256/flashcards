import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default DeckCard = (props) => {
  console.log(props.deck)

  openDeck = () => {
    const id = props.id;
    props.navigation.navigate('Deck', { id });
  }

  return (
    <View style={styles.deckContainer}>
      <View style={styles.containerTextTitle}>
        <Text style={styles.deckTextTitle}>{props.deck.title}</Text>
      </View>
      <Text style={styles.deckTextCards}>{props.deck.questions.length} cards</Text>
      <TouchableOpacity style={styles.containerButtonOptions}  onPress={this.openDeck}>
        <Ionicons name="ios-options" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    height: 60,
    borderBottomColor: '#173f5f',
    borderBottomWidth: 3,
    shadowRadius: 1,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    shadowOffset: { width: 0, height: 1 },
  },
  deckTextTitle: {
    fontSize: 14,
  },
  deckTextCards: {
    fontWeight: '200'
  },
  containerTextTitle: {
    padding: 10
  },
  containerButtonOptions: {
    padding: 15,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: '#00adb5',
  }
})