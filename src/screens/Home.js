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
              <Text>React</Text>
              <Text>3 cards</Text>
            </View>
            <View style={styles.card}>
              <Text>Redux</Text>
              <Text>19 cards</Text>
            </View>
            <View style={styles.card}>
              <Text>Udacity</Text>
              <Text>7 cards</Text>
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