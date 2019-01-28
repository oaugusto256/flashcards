import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardTextName}>{card.name}</Text>
      </View>
      <Text>{card.cards} cards</Text>
      <View>
        <Ionicons name="ios-options" size={25} color="#777" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
})