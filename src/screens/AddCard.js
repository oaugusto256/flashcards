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
import { addCard } from '../actions';

class AddCard extends Component {
  static navigationOptions = {
    title: 'Add Card',
    headerStyle: {
      backgroundColor: '#393e46',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    answer: '',
    question: '',
  }

  onCreate = () => {
    if(this.state.question !== '' && this.state.answer) {
      const card = {
        question: this.state.question,
        answer: this.state.answer
      }

      const deckId = this.props.navigation.getParam('id', 'DEFAULT_VALUE');

      this.props.addCard(card, deckId);
      this.props.navigation.navigate('Deck', { deckId });
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
            <Text style={styles.text}>What is the <EmphasizeText text={'question'} />?</Text>
            <Text style={styles.inputLabel}>
              Card' question:
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.question}
              placeholder={"Enter the card' question"}
              onChangeText={(question) => this.setState({ question })}
            />
            <Text style={styles.inputLabel}>
              Card' answer:
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.answer}
              placeholder={"Enter the card' answer"}
              onChangeText={(answer) => this.setState({ answer })}
            />
            <TouchableOpacity style={styles.buttonAdd} onPress={this.onCreate}>
              <Text style={styles.buttonAddText}>
                Add Card
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
  addCard
})(AddCard);

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
    marginBottom: 10,
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
  buttonAddText: {
    color: '#fff'
  }
})