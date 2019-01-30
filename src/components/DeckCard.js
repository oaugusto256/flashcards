import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default DeckCard = ({ deck }) => {
  return (
    <View style={styles.deckContainer}>
      <View style={styles.containerTextName}>
        <Text style={styles.deckTextName}>{deck.name}</Text>
      </View>
      <Text style={styles.deckTextCards}>{deck.cards} cards</Text>
      <TouchableOpacity style={styles.containerButtonOptions}>
        <Ionicons name="ios-options" size={25} color="#777" />
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
    borderBottomColor: '#00adb5',
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
  deckTextName: {
    fontSize: 14,
  },
  deckTextCards: {
    fontWeight: '200'
  },
  containerTextName: {
    padding: 10
  },
  containerButtonOptions: {
    padding: 15,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: '#d8d8d8',
  }
})