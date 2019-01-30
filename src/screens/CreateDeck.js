import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
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

  state = {
    deckTitle: ''
  }

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
            <Text style={styles.text}>What name you will give to your <EmphasizeText text={'new'} /> deck?</Text>
            <Text style={styles.inputLabel}>
              Deck' name
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.deckTitle}
              placeholder={"Enter the deck' name"}
              onChangeText={(deckTitle) => this.setState({ deckTitle })}
            />
            <TouchableOpacity style={styles.buttonAdd}>
              <Text style={styles.buttonAddText}>
                Create Deck
              </Text>
            </TouchableOpacity>
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
    padding: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#d8d8d8'
  },
  input: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    marginTop: 2.5,
    borderBottomWidth: 0.75,
    borderBottomColor: '#d8d8d8',
  },
  buttonCreateContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  buttonAdd: {
    height: 50,
    padding: 5,
    marginTop: 15,
    borderRadius: 3,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00adb5',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonAddText: {
    color: '#fff'
  }
})