import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default DeckCard = ({ deck }) => {
  return (
    <View style={styles.deck}>
      <View style={styles.containerTextName}>
        <Text style={styles.deckTextName}>{deck.name}</Text>
      </View>
      <Text>{deck.cards} cards</Text>
      <View style={styles.containerButtonOptions}>
        <Ionicons name="ios-options" size={25} color="#777" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deck: {
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
  deckTextName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerTextName: {
    padding: 10
  },
  containerButtonOptions: {
    padding: 10
  }
})