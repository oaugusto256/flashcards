import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';

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
    const questions = this.props.decks[this.props.navigation.getParam('id', 'DEFAULT_VALUE')].questions;

    setTimeout(() => {
      this.setState({
        questions,
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
            ? <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00adb5" />
              </View>
            : <>
                <ScrollView>
                  <View style={styles.infoContainer}>
                    <Text style={styles.introText}>It's time!</Text>
                    <Text style={styles.countQuestionsText}>{this.state.currentQuestion + 1}/{this.state.questions.length}</Text>
                  </View>
                  <View style={styles.questionContainer}>
                    <Text>#1</Text>
                    <Text>Question</Text>
                    <TouchableOpacity>
                      <Text>Show Answer</Text>
                    </TouchableOpacity>
                    <Text>Answer</Text>
                  </View>
                  <View styles={styles.actionContainer}>
                    <TouchableOpacity>
                      <Text>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>Incorrect</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
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

export default connect(mapStateToProps, {

})(Quiz);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height,
  },
  infoContainer: {
    flex: 1,
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  countQuestionsText: {
    fontSize: 16,
    alignSelf: 'center'
  },
})