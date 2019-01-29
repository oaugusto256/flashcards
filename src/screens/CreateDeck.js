import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import EmphasizeText from '../components/EmphasizeText';

export default class CreateDeck extends Component {
  static navigationOptions = {
    title: 'Create Deck',
    headerStyle: {
      backgroundColor: '#393e46',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#393e46"
        />
        <View style={styles.screen}>
          <View style={styles.content}>
            <Text style={styles.introText}>First,</Text>
            <Text style={styles.text}>What name you will give to your <EmphasizeText text={'new'} /> deck?
            </Text>
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
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 10,
  }
})