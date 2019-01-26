import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Home</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.text}>Select a card to play or edit, or create a new one!</Text>
            <View style={styles.card}>
              <Text>Card</Text>
            </View>
            <View style={styles.card}>
              <Text>Card</Text>
            </View>
            <View style={styles.card}>
              <Text>Card</Text>
            </View>
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
    height: 60,
    padding: 7.5,
    shadowRadius: 1,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    shadowOffset: { width: 0, height: 1 },
  },
  buttonAdd: {
    flex: 1,
    zIndex: 2,
    right: 0,
    bottom: 0,
    width: 55,
    height: 55,
    margin: 20,
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: '#00adb5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 1 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold'
  }
})