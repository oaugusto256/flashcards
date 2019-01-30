import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TextInput,
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
            <EmphasizeText text={'Name:'} />
            <TextInput
              style={styles.textInput}
              value={this.state.deckTitle}
              placeholder={'Type the deck name'}
              onChangeText={(deckTitle) => this.setState({ deckTitle })}
            />
            <TouchableOpacity style={styles.buttonAdd}>
              <Ionicons name="ios-add" size={30} color="#fff" />
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
    padding: 10,
  },
  textInput: {
    padding: 15,
    borderRadius: 3,
    borderWidth: 0.75,
    borderColor: '#d8d8d8',
    marginTop: 10
  },
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