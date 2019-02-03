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
import { connect } from 'react-redux';
import { saveDeck } from '../actions';

class CreateDeck extends Component {
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
    title: ''
  }

  onCreate = () => {
    if(this.state.title !== '' && this.state.title.length >= 3) {
      const id = Math.random().toString(36).substr(-8);
      const title = this.state.title;

      this.props.saveDeck(id, title);
      this.props.navigation.navigate('Deck', { id });
    }
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
            <Text style={styles.text}>What title you will give to your <EmphasizeText text={'new'} /> deck?</Text>
            <Text style={styles.inputLabel}>
              Deck' title:
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.title}
              placeholder={"Enter the deck' title"}
              onChangeText={(title) => this.setState({ title })}
            />
            <TouchableOpacity
              onPress={this.onCreate}
              style={this.state.title.length >= 3 ? styles.buttonAdd : styles.buttonAddDisable}
            >
              <Text style={styles.buttonAddText}>
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state.deck.decks,
    error: state.deck.error,
    loading: state.deck.loading,
  };
};

export default connect(mapStateToProps, {
  saveDeck
})(CreateDeck);

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
  },
  input: {
    marginTop: 5,
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
    borderRadius: 3,
    borderWidth: 0.75,
    borderColor: '#eeeeee',
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
  buttonAddDisable: {
    height: 50,
    padding: 5,
    marginTop: 15,
    borderRadius: 3,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonAddText: {
    color: '#fff'
  }
})