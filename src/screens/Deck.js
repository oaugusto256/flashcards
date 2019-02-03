import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import EmphasizeText from '../components/EmphasizeText';
import { connect } from 'react-redux';
import { verifyCurrentStorage } from '../actions';
import QuestionCard from '../components/QuestionCard';
import { ScrollView } from 'react-native-gesture-handler';

class Deck extends Component {
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
    id: '',
    loading: true
  }

  componentDidMount = () => {
    if(this.props.decks !== null) {
      if(this.props.decks[this.props.navigation.getParam('id', 'DEFAULT_VALUE')]) {
        this.setState({
          loading: false,
          id: this.props.navigation.getParam('id', 'DEFAULT_VALUE')
        })
      }
    }
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.decks !== prevProps.decks) {
      if(this.props.decks !== null) {
        if(this.props.decks[this.props.navigation.getParam('id', 'DEFAULT_VALUE')]) {
          this.setState({
            loading: false,
            id: this.props.navigation.getParam('id', 'DEFAULT_VALUE')
          })
        }
      }
    }
  }

  renderQuestionCards = () => {
    const { decks } = this.props;
    const { id } = this.state;

    if(decks[id].questions.length === 0) {
      return (
        <Text style={styles.subText}>No card was <EmphasizeText text={'added'} /> yet!</Text>
      )
    } else {
      return (
        <ScrollView>
          {decks[id].questions.map(question => {
            return <QuestionCard key={question.question} question={question} />
          })}
        </ScrollView>
      )
    }
  }

  onAddCard = () => {
    const { id } = this.state;
    this.props.navigation.navigate('AddCard', { id });
  }

  render() {
    const { id } = this.state;

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
                <View style={styles.infoContainer}>
                  <Text style={styles.introText}>{this.props.decks[id].title}</Text>
                  <Text style={styles.subText}>{`${this.props.decks[id].questions.length} cards`}</Text>
                </View>
                <View style={styles.actionContainer}>
                  <TouchableOpacity style={this.props.decks[id].questions.length > 0 ? styles.buttonStart : styles.buttonDisable}>
                    <Text style={styles.buttonLabel}>
                      Start Quiz
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.flexContainer}>
                    <TouchableOpacity style={styles.buttonAddCard} onPress={this.onAddCard}>
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
                <View style={styles.listCardsContainer}>
                  <Text style={styles.introText}>Questions list</Text>
                  {this.renderQuestionCards()}
                </View>
              </>
            }
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
  verifyCurrentStorage
})(Deck);

const { height } = Dimensions.get('window');

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
    color: '#777',
    fontSize: 16,
    marginBottom: 5,
  },
  loadingContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    padding: 15,
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  listCardsContainer: {
    flex: 4,
    padding: 15,
  },
  flexContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonStart: {
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
    backgroundColor: '#173f5f',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonDisable: {
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
  buttonDeleteDeck: {
    flex: 1,
    height: 50,
    padding: 5,
    borderRadius: 3,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ed553b',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
})