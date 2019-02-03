import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Loading from '../components/Loading';

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz',
    headerStyle: {
      backgroundColor: '#393e46',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    score: 0,
    questions: [],
    loading: true,
    isFinished: false,
  }

  componentDidMount = () => {
    // const questions = this.props.decks[this.props.navigation.getParam('id', 'DEFAULT_VALUE')].questions;

    setTimeout(() => {
      this.setState({
        currentQuestion: 0,
        loading: false,
      })
    }, 500);
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#393e46"
        />
        <View style={styles.screen}>
          {this.state.loading
            ? <Loading />
            : <>
                <View style={styles.infoContainer}>
                  <Text style={styles.introText}>It's time!</Text>
                </View>
                <View style={styles.questionContainer}>
                  <Text style={styles.questionNumber}>#1</Text>
                  <View style={styles.questionInfoContainer}>
                    <Text style={styles.questionText}>
                      "Does Udacity have free courses?"
                    </Text>
                  </View>
                  <View style={styles.questionAnswerContainer}>
                    <TouchableOpacity style={styles.questionAnswerButton}>
                      <Ionicons name="ios-eye" size={25} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.actionContainer}>
                  <TouchableOpacity style={styles.buttonCorrect}>
                    <Text style={styles.buttonLabel}>Correct</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.buttonIncorrect}>
                    <Text style={styles.buttonLabel}>Incorrect</Text>
                  </TouchableOpacity>
                </View>
              </>}
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

export default connect(mapStateToProps, {})(Quiz);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height,
  },
  infoContainer: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  questionContainer: {
    flex: 6,
    margin: 15,
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    backgroundColor: '#eeeeee',
    borderBottomWidth: 4,
    borderBottomColor: '#173f5f',
    shadowOffset: { width: 0, height: 1 },
  },
  questionInfoContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  questionNumber: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  questionAnswerContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionText: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  questionAnswerButton: {
    width: 65,
    height: 65,
    borderRadius: 3,
    backgroundColor: '#173f5f',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  questionAnswerButtonText: {
    color: '#fff'
  },
  actionContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding: 15,
  },
  introText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonLabel: {
    color: '#fff'
  },
  buttonCorrect: {
    flex: 1,
    height: 50,
    padding: 5,
    marginRight: 5,
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
  buttonIncorrect: {
    flex: 1,
    height: 50,
    padding: 5,
    marginLeft: 5,
    borderRadius: 3,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ed553b',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  }
})