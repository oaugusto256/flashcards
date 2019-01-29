import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default ButtonAddDeck = (props) => {
  return (
    <TouchableOpacity style={styles.buttonAdd} onPress={props.onPress}>
      <Ionicons name="ios-add" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  }
})