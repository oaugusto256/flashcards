import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Header = ({ text }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
})