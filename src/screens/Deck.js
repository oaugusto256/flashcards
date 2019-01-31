import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class Deck extends Component {
  static navigationOptions = {
    title: 'Deck',
    headerStyle: {
      backgroundColor: '#393e46',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    deckName: 'Python'
  }

  onCreate = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#393e46"
        />
        <View style={styles.screen}>
          <View style={styles.infoContainer}>
            <Text style={styles.introText}>{this.state.deckName}</Text>
            <Text style={styles.subText}>0 cards</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.butonStart}>
              <Text style={styles.buttonLabel}>
                Start Quiz
              </Text>
            </TouchableOpacity>
            <View style={styles.flexContainer}>
              <TouchableOpacity style={styles.buttonAddCard}>
                <Text style={styles.buttonLabel}>
                  Add Card
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonDeleteDeck}>
                <Text style={styles.buttonLabel}>
                  Delete Quiz
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height,
  },
  introText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    color: '#777'
  },
  infoContainer: {
    flex: 1,
    padding: 15,
  },
  actionContainer: {
    flex: 4,
    padding: 15,
  },
  flexContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  butonStart: {
    height: 50,
    padding: 5,
    borderRadius: 3,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00adb5',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonLabel: {
    color: '#fff'
  },
  buttonAddCard: {
    flex: 1,
    height: 50,
    padding: 5,
    borderRadius: 3,
    marginBottom: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00adb5',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonDeleteDeck: {
    flex: 1,
    height: 50,
    padding: 5,
    borderRadius: 3,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00adb5',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
})