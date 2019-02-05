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
    isOver: false,
    loading: true,
    showAnswer: false,
    currentQuestion: 0,
  }

  componentDidMount = () => {
    const questions = this.props.decks[this.props.navigation.getParam('id', 'DEFAULT_VALUE')].questions;

    setTimeout(() => {
      this.setState({
        isOver: false,
        loading: false,
        currentQuestion: 0,
        showAnswer: false,
        questions,
        score: 0
      })
    }, 500);
  }

  startAgain = () => {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        score: 0,
        isOver: false,
        loading: false,
        showAnswer: false,
        currentQuestion: 0,
      });
    }, 500);
  }

  goToDeck = () => {
    const id = this.props.navigation.getParam('id', 'DEFAULT_VALUE');
    this.props.navigation.navigate('Deck', { id })
  }

  showAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }));
  }

  nextCard = async (answer) => {
    const { currentQuestion, questions } = this.state;

    if(answer === 'correct') {
      await this.setState(prevState => ({
        score: prevState.score + 1,
      }));
    }

    if(currentQuestion + 1 === questions.length) {
      this.setState({
        isOver: true
      })
    } else {
      await this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion + 1,
        showAnswer: false
      }));
    }
  }

  renderButtons = () => {
    const { isOver } = this.state;

    if(isOver) {
      return (
        <>
          <TouchableOpacity style={styles.buttonCorrect} onPress={this.startAgain}>
            <Text style={styles.buttonLabel}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonIncorrect} onPress={this.goToDeck}>
            <Text style={styles.buttonLabel}>Go to Deck</Text>
          </TouchableOpacity>
        </>
      )
    } else {
      return (
        <>
          <TouchableOpacity style={styles.buttonCorrect} onPress={() => this.nextCard('correct')}>
            <Text style={styles.buttonLabel}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonIncorrect} onPress={() => this.nextCard('incorrect')}>
            <Text style={styles.buttonLabel}>Incorrect</Text>
          </TouchableOpacity>
        </>
      )
    }
  }

  renderQuestion = () => {
    const { questions, isOver, currentQuestion, showAnswer, score } = this.state;

    if(isOver) {
      return (
        <View style={styles.resultContainer}>
          <Text style={styles.quizOverText}>Check your results:</Text>
          <Text style={styles.resultText}><Text style={styles.correctResultText}>{score}</Text>/{questions.length}</Text>
          <Text style={styles.quizOverText}>Play again or come back to deck section.</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>#{currentQuestion+1}</Text>
          <View style={styles.questionInfoContainer}>
            <Text style={styles.questionText}>
              {questions[currentQuestion].question}
            </Text>
          </View>
          <View style={styles.questionAnswerContainer}>
            {showAnswer
              ? null
              : <TouchableOpacity style={styles.questionAnswerButton} onPress={this.showAnswer}>
                  <Ionicons name="ios-eye" size={25} color="#fff" />
                </TouchableOpacity>}
            {showAnswer
              ? <Text style={styles.answerText}>{questions[currentQuestion].answer}</Text>
              : null}
          </View>
        </View>
      )
    }
  }

  render() {
    const { isOver } = this.state;

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
                  {isOver ? <Text style={styles.introText}>It's over!</Text> : <Text style={styles.introText}>It's time to learn!</Text>}
                </View>
                {this.renderQuestion()}
                <View style={styles.actionContainer}>
                  {this.renderButtons()}
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
  resultContainer: {
    flex: 6,
    margin: 15,
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    borderBottomWidth: 4,
    borderBottomColor: '#173f5f',
    shadowOffset: { width: 0, height: 1 },
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
  answerText: {
    fontSize: 16
  },
  resultText: {
    fontSize: 60,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  correctResultText: {
    color: '#F6D55C',
    fontSize: 90
  },
  quizOverText: {
    fontSize: 16
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